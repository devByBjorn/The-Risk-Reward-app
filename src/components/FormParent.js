import React from 'react'
import { calculateReward, calculateRisk } from '../calculations/rewardToRiskCalculation'
import FormStepMarketDirectionSetup from './FormStepMarketDirectionSetup'
import FormStepEntryStopTarget from './FormStepEntryStopTarget'
import FormStepExecution from './FormStepExecution'
import FormStepManagement from './FormStepManagement'
import FormSubmitClosed from './FormSubmitClosed'
import FormSubmitActive from './FormSubmitAcitve'
import FormSubmitPending from './FormSubmitPending'
import FormStepStatusDatesOutcome from './FormStepStatusDatesOutcome'

class FormParent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      accordingToPlan: props.trade ? props.trade.accordingToPlan : '',
      direction: props.trade ? props.trade.direction : '',
      market: props.trade ? props.trade.market : '',
      entry: props.trade ? props.trade.entry : '',
      stop: props.trade ? props.trade.stop : '',
      target: props.trade ? props.trade.target : '',
      exit: props.trade ? props.trade.exit : '',
      status: props.trade ? props.trade.status : '',
      setup: props.trade ? props.trade.setup : '',
      outcome: props.trade ? props.trade.outcome : '',
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

  nextStep = () => {
    const { step } = this.state
    this.setState(() => ({ step: step + 1 }))
  }

  prevStep = () => {
    const { step } = this.state
    this.setState(() => ({ step: step - 1 }))
  }

  navigateByStepValue = (stepValue) => {
    this.setState(() => ({ step: stepValue }))
  }

  onChangeByInput = (e) => {
    const value = e.target.value
    const name = e.target.name

    if (name === 'status' && value !== 'closed') {
      this.setState(() => ({
        outcome: '',
        closed: new Date,
        opened: new Date(),
        conclusion: {
          execution: '',
          closed: '',
          improveExecution: '',
          whyExecution: '',
          management: '',
          improveManagement: '',
          whyManagement: '',
        }
      }))
    }

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
        return rewardToRisk = calculateReward(entry, stop, target, direction)
      case 'loss':
        return rewardToRisk = calculateRisk(entry, stop, target, direction)
      case 'scratch':
        return rewardToRisk = 0.00
    }
  }

  calculateRMultiple = (entry, stop, exit) => (exit - entry) / (entry - stop)

  onOpenDateChange = (opened) => {
    this.setState(() => ({ opened }))
  }
  onClosedDateChange = (closed) => {
    this.setState(() => ({ closed }))
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
    const { direction, market, entry, stop, target, exit,
      status, outcome, setup, opened, closed, conclusion } = this.state

    e.preventDefault()
    this.props.handleSubmit({
      direction: direction,
      market: market.toUpperCase(),
      entry: parseFloat(entry),
      stop: parseFloat(stop),
      target: target && parseFloat(target),
      exit: exit && parseFloat(exit),
      status: status,
      outcome: status === 'closed' ? outcome : '',
      setup: setup,
      opened: opened ? opened.getTime() : '',
      closed: closed ? closed.getTime() : '',
      period: closed && opened ? (closed.getTime() - opened.getTime()) : '',
      rewardToRisk: outcome && parseFloat(this.calculateRewardToRisk()),
      risk: parseFloat(calculateRisk(entry, stop, target, direction)),
      reward: parseFloat(calculateReward(entry, stop, target, direction)),
      rMultiple: this.calculateRMultiple(entry, stop, exit),
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
      setup, target, exit, status, outcome, rewardToRisk,
      opened, closed, period, inputError } = this.state

    const { execution, management,
      whyExecution, improveExecution,
      whyManagement, improveManagement } = this.state.conclusion

    const values = {
      step, direction, market, entry, stop, target, exit, setup, status,
      outcome, rewardToRisk, opened, closed, period, inputError,
      execution, management, whyExecution, improveExecution,
      whyManagement, improveManagement,
    }

    switch (step) {
      case 1:
        return (
          <FormStepStatusDatesOutcome
            values={values}
            navigateByStepValue={this.navigateByStepValue}
            nextStep={this.nextStep}
            onChangeByInput={this.onChangeByInput}
            onOpenDateChange={this.onOpenDateChange}
            onClosedDateChange={this.onClosedDateChange}
          />
        )
      case 2:
        return (
          <FormStepMarketDirectionSetup
            values={values}
            navigateByStepValue={this.navigateByStepValue}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onChangeByInput={this.onChangeByInput}
            onChangeValue={this.onChangeValue}
          />
        )
      case 3:
        return (
          <FormStepEntryStopTarget
            values={values}
            prevStep={this.prevStep}
            navigateByStepValue={this.navigateByStepValue}
            nextStep={this.nextStep}
            onChangeValue={this.onChangeValue}
            onChangeByInput={this.onChangeByInput}
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
