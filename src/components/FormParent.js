import React from 'react'
import moment from 'moment'
import { calculatePositiveR, calculateNegativeR } from '../calculations/riskRewardCalculation'
import FormStepOne from './FormStepOne'
import FormStepTwo from './FormStepTwo'
import FormStepExecution from './FormStepExecution'
import FormStepManagement from './FormStepManagement'
import FormSubmitClosed from './FormSubmitClosed'
import FormSubmitActive from './FormSubmitAcitve'
import FormSubmitPending from './FormSubmitPending'
import FormNav from './FormNav'
import FormStepThree from './FormStepThree'

class FormParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      editMode: false,
      pathname: props.pathname ? props.pathname : '',
      direction: props.trade ? props.trade.direction : '',
      market: props.trade ? props.trade.market : '',
      entry: props.trade ? props.trade.entry : '',
      stop: props.trade ? props.trade.stop : '',
      target: props.trade ? props.trade.target : '',
      status: props.trade ? props.trade.status : '',
      setup: props.trade ? props.trade.setup : '',
      outcome: props.trade ? props.trade.outcome : '',
      //opened: props.trade ? moment(props.trade.opened) : moment(),
      //closed: props.trade ? moment(props.trade.closed) : moment(),
      opened: props.trade ? new Date(props.trade.opened) : new Date(),
      closed: props.trade ? new Date(props.trade.closed) : new Date(),
      conclusion: props.trade
        ? ({
          execution: props.trade.conclusion.execution,
          whyExecution: props.trade.conclusion.whyManagement,
          improveExecution: props.trade.conclusion.improveManagement,
          management: props.trade.conclusion.management,
          whyManagement: props.trade.conclusion.whyManagement,
          improveManagement: props.trade.conclusion.improveManagement,
        })
        : ({
          execution: '',
          whyExecution: '',
          improveExecution: '',
          management: '',
          whyManagement: '',
          improveManagement: '',
        })
    }
  }

  componentDidMount = () => {
    const { pathname } = this.state
    pathname.includes('edit')
      ? this.isEditMode()
      : false
  }

  isEditMode = () => {
    const editMode = !this.state.editMode
    this.setState(() => ({ editMode }))
  }

  navigateByStepValue = (e) => {
    const step = parseInt(e.target.value, 10)
    this.setState(() => ({ step }))
  }

  nextStep = () => {
    const { step } = this.state
    this.setState(() => ({ step: step + 1 }))
  }

  prevStep = () => {
    const { step } = this.state
    this.setState(() => ({ step: step - 1 }))
  }

  onChangeByInput = (e) => {
    const value = e.target.value
    const name = e.target.name
    this.setState(() => ({ [name]: value }))
  }

  onChangeValue = (e) => {
    const { value, name } = e.target

    !value || value.match(/^\d*(\.\d*)?$/)
      ? this.setState(() => ({ [name]: value }))
      : ''
  }

  calculateRewardToRisk = () => {
    const { entry, stop, target, outcome, direction } = this.state

    let rewardToRisk
    switch (outcome) {
      case 'win':
        return rewardToRisk = calculatePositiveR(entry, stop, target, direction)
      case 'loss':
        return rewardToRisk = calculateNegativeR(entry, stop, target, direction)
      case 'scratch':
        return rewardToRisk = 0.00
    }
  }

  onOpenDateChange = (opened) => {
    this.setState(() => ({ opened }))
    console.log('OPENED:', opened)
  }
  onClosedDateChange = (closed) => {
    this.setState(() => ({ closed }))
    console.log('CLOSED:', closed)
  }

  onConclusionChange = (e) => {
    const { name, value } = e.target
    this.setState(prevState => ({
      conclusion: {
        ...prevState.conclusion,
        [name]: value
      }
    }))
  }

  handleSubmit = (e) => {
    const { direction, market, entry, stop, target,
      status, outcome, setup, opened, closed, conclusion } = this.state

    e.preventDefault()
    this.props.handleSubmit({
      direction: direction,
      market: market.toUpperCase(),
      entry: entry,
      stop: stop,
      target: target,
      status: status,
      outcome: status === 'closed' ? outcome : '',
      setup: setup,
      //opened: opened ? opened.valueOf() : '',
      //closed: closed ? closed.valueOf() : '',
      //period: closed && opened ? (closed - opened).valueOf() : '',
      opened: opened ? opened.getTime() : '',
      closed: closed ? closed.getTime() : '',
      //period: closed && opened ? (closed - opened).getTime() : '',
      rewardToRisk: outcome && parseFloat(this.calculateRewardToRisk()),
      negativeR: !outcome && calculateNegativeR(entry, stop, target, direction),
      positiveR: !outcome && calculatePositiveR(entry, stop, target, direction),
      conclusion: conclusion && {
        execution: conclusion.execution,
        whyExecution: conclusion.whyExecution,
        improveExecution: conclusion.improveExecution,
        management: conclusion.management,
        whyManagement: conclusion.whyManagement,
        improveManagement: conclusion.improveManagement
      },
    })
  }

  render() {
    const { step, direction, market, entry, stop,
      setup, target, status, outcome, rewardToRisk,
      opened, closed, period, inputError, editMode } = this.state

    const { execution, management,
      whyExecution, improveExecution,
      whyManagement, improveManagement } = this.state.conclusion

    const values = {
      direction, market, entry, stop, target, setup, status,
      outcome, rewardToRisk, opened, closed, period, inputError,
      execution, management, whyExecution, improveExecution,
      whyManagement, improveManagement, step
    }

    switch (step) {
      case 1:
        return (
          <FormStepOne
            values={values}
            navigateByStepValue={this.navigateByStepValue}
            nextStep={this.nextStep}
            onChangeByInput={this.onChangeByInput}
            onChangeValue={this.onChangeValue}
          />
        )
      case 2:
        return (
          <FormStepTwo
            values={values}
            prevStep={this.prevStep}
            navigateByStepValue={this.navigateByStepValue}
            nextStep={this.nextStep}
            onChangeValue={this.onChangeValue}
            onChangeByInput={this.onChangeByInput}
          />
        )
      case 3:
        return (
          <FormStepThree
            values={values}
            prevStep={this.prevStep}
            navigateByStepValue={this.navigateByStepValue}
            nextStep={this.nextStep}
            onChangeByInput={this.onChangeByInput}
            onOpenDateChange={this.onOpenDateChange}
            onClosedDateChange={this.onClosedDateChange}
          />
        )
    }

    if (step === 4 && status === 'closed') {
      return (

        <FormStepExecution
          values={values}
          prevStep={this.prevStep}
          navigateByStepValue={this.navigateByStepValue}
          nextStep={this.nextStep}
          onConclusionChange={this.onConclusionChange}
        />

      )
    } else if (step === 4 && status === 'active') {
      return (


        <FormSubmitActive
          values={values}
          prevStep={this.prevStep}
          navigateByStepValue={this.navigateByStepValue}
          handleSubmit={this.handleSubmit}
        />

      )
    } else if (step === 4 && status === 'pending') {
      return (

        <FormSubmitPending
          values={values}
          prevStep={this.prevStep}
          navigateByStepValue={this.navigateByStepValue}
          handleSubmit={this.handleSubmit}
        />
      )
    }

    if (step === 5 && status === 'closed') {
      return (

        <FormStepManagement
          values={values}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          navigateByStepValue={this.navigateByStepValue}
          onConclusionChange={this.onConclusionChange}
        />

      )
    }

    if (step === 6 && status === 'closed') {
      return (
        <FormSubmitClosed
          values={values}
          prevStep={this.prevStep}
          navigateByStepValue={this.navigateByStepValue}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default FormParent