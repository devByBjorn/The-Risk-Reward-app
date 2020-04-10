import React from 'react'
import moment from 'moment'
import { calculatePositiveR, calculateNegativeR } from '../../../calculate-r/riskRewardCalculation'
import MarketAndDirection from './init-trade-steps/MarketAndDirection'
import StopEntryTarget from './init-trade-steps/StopEntryTarget'
import TradeStatus from './init-trade-steps/TradeStatus'
import OutComeAndDates from './closed-trade-steps/OutcomeAndDates'
import Execution from './closed-trade-steps/Execution'
import Management from './closed-trade-steps/Management'
import InspectAndSubmitClosed from './closed-trade-steps/InscpectAndSubmitClosed'
import SetOpenDate from './active-trade-steps/SetOpenDate'
import InspectAndSubmitActive from './active-trade-steps/InspectAndSubmitAcitve'
import InspectAndSubmitPending from './pending-trade-steps/InspectAndSubmitPending'
import TradeParentFormNav from './TradeParentFormNav'

class MainParentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      errorMsg: '',
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
      opened: props.trade ? moment(props.trade.opened) : moment(),
      closed: props.trade ? moment(props.trade.closed) : moment(),
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

  onDatesChange = ({ startDate, endDate }) => this.setState(() => ({
    opened: startDate,
    closed: endDate
  }))

  onOpenDateChange = (opened) => this.setState(() => ({ opened }))

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
      outcome: outcome,
      setup: setup,
      opened: opened ? opened.valueOf() : '',
      closed: closed ? closed.valueOf() : '',
      period: closed && opened ? (closed - opened).valueOf() : '',
      rewardToRisk: parseFloat(this.calculateRewardToRisk()),
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
      whyManagement, improveManagement,
    }

    switch (step) {
      case 1:
        return (
          <div>
            {editMode &&
              <TradeParentFormNav
                values={values}
                prevStep={this.prevStep}
                navigateByStepValue={this.navigateByStepValue}
              />
            }
            <MarketAndDirection
              values={values}
              nextStep={this.nextStep}
              onChangeByInput={this.onChangeByInput}
            />
          </div>
        )
      case 2:
        return (
          <div>
            {editMode &&
              <TradeParentFormNav
                values={values}
                prevStep={this.prevStep}
                navigateByStepValue={this.navigateByStepValue}
              />
            }
            <StopEntryTarget
              values={values}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              onChangeValue={this.onChangeValue}
              onChangeByInput={this.onChangeByInput}
            />
          </div>
        )

      case 3:
        return (
          <div>
            {editMode &&
              <TradeParentFormNav
                values={values}
                prevStep={this.prevStep}
                navigateByStepValue={this.navigateByStepValue}
              />
            }
            <TradeStatus
              values={values}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              onChangeByInput={this.onChangeByInput}
              handleSubmit={this.handleSubmit}
            />
          </div>
        )
    }

    if (step === 4 && status === 'closed') {
      return (
        <div>
          {editMode &&
            <TradeParentFormNav
              values={values}
              prevStep={this.prevStep}
              navigateByStepValue={this.navigateByStepValue}
            />
          }
          <OutComeAndDates
            values={values}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            onChangeByInput={this.onChangeByInput}
            onDatesChange={this.onDatesChange}
          />
        </div>
      )
    } else if (step === 4 && status === 'active') {
      return (
        <div>
          {editMode &&
            <TradeParentFormNav
              values={values}
              prevStep={this.prevStep}
              navigateByStepValue={this.navigateByStepValue}
            />
          }
          <SetOpenDate
            values={values}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onOpenDateChange={this.onOpenDateChange}
            handleSubmit={this.handleSubmit}
          />
        </div>

      )
    } else if (step === 4 && status === 'pending') {
      return (
        <div>

          {editMode &&
            <TradeParentFormNav
              values={values}
              prevStep={this.prevStep}
              navigateByStepValue={this.navigateByStepValue}
            />
          }
          <InspectAndSubmitPending
            values={values}
            prevStep={this.prevStep}
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    }

    if (step === 5 && status === 'closed') {
      return (
        <div>
          {editMode &&
            <TradeParentFormNav
              values={values}
              prevStep={this.prevStep}
              navigateByStepValue={this.navigateByStepValue}
            />
          }
          <Execution
            values={values}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            onConclusionChange={this.onConclusionChange}
          />
        </div>
      )
    } else if (step === 5 && status === 'active') {
      return (
        <div>
          {editMode &&
            <TradeParentFormNav
              values={values}
              prevStep={this.prevStep}
              navigateByStepValue={this.navigateByStepValue}
            />
          }
          <InspectAndSubmitActive
            values={values}
            prevStep={this.prevStep}
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    }

    if (step === 6 && status === 'closed') {
      return (
        <div>
          {editMode &&
            <TradeParentFormNav
              values={values}
              prevStep={this.prevStep}
              navigateByStepValue={this.navigateByStepValue}
            />
          }
          <Management
            values={values}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            onConclusionChange={this.onConclusionChange}
          />
        </div>
      )
    }

    if (step === 7 && status === 'closed') {
      return (
        <div>
          {editMode &&
            <TradeParentFormNav
              values={values}
              prevStep={this.prevStep}
              navigateByStepValue={this.navigateByStepValue}
            />
          }
          <InspectAndSubmitClosed
            values={values}
            prevStep={this.prevStep}
            handleSubmit={this.handleSubmit}
          />
        </div>
      )
    }
  }
}

export default MainParentForm
