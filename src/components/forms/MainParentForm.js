import React from 'react'
import moment from 'moment'
import { calculatePositiveR, calculateNegativeR } from '../../calculate-r/riskRewardCalculation'
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

import StepBtn from './StepBtn'

import MainParentFormHeading from '../forms/MainParentFormHeading'
class MainParentForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      direction: props.trade ? props.trade.direction : '',
      market: props.trade ? props.trade.market : '',
      entry: props.trade ? props.trade.entry : '',
      stop: props.trade ? props.trade.stop : '',
      target: props.trade ? props.trade.target : '',
      status: props.trade ? props.trade.status : '',
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

  incrementStepOnNavButtonClick = (e) => {
    const value = e.target.value
    this.setState(() => ({ step: value }))
  }

  // KOlla StepBtn i första steget - funkar 
  // gör om prevStep till samma function
  // hur ordna med error meddelande? Flytta tillbaka till denna component??
  nextStep = (e) => {
    e.preventDefault()
    const { step } = this.state
    this.setState(() => ({ step: step + 1 }))
  }

  prevStep = () => {
    const { step } = this.state
    this.setState(() => ({ step: step - 1 }))
  }

  onClickDirection = (e) => {
    const direction = e.target.value
    this.setState(() => ({ direction }))
  }

  onChangeMarket = (e) => {
    const market = e.target.value
    this.setState(() => ({ market }))
  }

  onChangeValue = (e) => {
    const value = e.target.value
    const name = e.target.name

    !value || value.match(/^\d*(\.\d*)?$/)
      ? this.setState(() => ({ [name]: value }))
      : ''
  }

  onClickStatus = (e) => {
    const status = e.target.value
    this.setState(() => ({ status }))
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

  onClickOutcome = (e) => {
    const outcome = e.target.value
    this.setState(() => ({ outcome }))
  }

  onDatesChange = ({ startDate, endDate }) =>
    this.setState(() => ({
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
    e.preventDefault()
    this.props.handleSubmit({
      direction: this.state.direction,
      market: this.state.market.toUpperCase(),
      entry: this.state.entry,
      stop: this.state.stop,
      target: this.state.target,
      status: this.state.status,
      outcome: this.state.outcome,
      opened: this.state.opened ? this.state.opened.valueOf() : '',
      closed: this.state.closed ? this.state.closed.valueOf() : '',
      period: this.state.closed && this.state.opened ? (this.state.closed - this.state.opened).valueOf() : '',
      rewardToRisk: parseFloat(this.calculateRewardToRisk()),
      conclusion: this.state.conclusion && {
        execution: this.state.conclusion.execution,
        whyExecution: this.state.conclusion.whyExecution,
        improveExecution: this.state.conclusion.improveExecution,
        management: this.state.conclusion.management,
        whyManagement: this.state.conclusion.whyManagement,
        improveManagement: this.state.conclusion.improveManagement
      },
    })
  }

  render() {
    const { step, direction, market, entry, stop,
      target, status, outcome, rewardToRisk,
      opened, closed, period, inputError } = this.state

    const { execution, management,
      whyExecution, improveExecution,
      whyManagement, improveManagement } = this.state.conclusion

    const values = {
      direction, market, entry, stop,
      target, status, outcome, rewardToRisk,
      opened, closed, period, inputError,
      execution, management,
      whyExecution, improveExecution,
      whyManagement, improveManagement,
    }

    switch (step) {
      case 1:
        return (
          <div>
            <MarketAndDirection
              values={values}
              // nextStep={this.nextStep}
              onClickDirection={this.onClickDirection}
              onChangeMarket={this.onChangeMarket}
              onChangeValue={this.onChangeValue}
            />
            <StepBtn
              text="Next"
              onClick={this.nextStep}
            />
          </div>
        )
      case 2:
        return (
          <div>
            <MainParentFormHeading
              onClick={this.incrementStepOnNavButtonClick}
            />
            <StopEntryTarget
              values={values}
              prevStep={this.prevStep}
              nextStep={this.nextStep}
              onChangeValue={this.onChangeValue}
            />
          </div>
        )

      case 3:
        return (
          <TradeStatus
            values={values}
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            onClickStatus={this.onClickStatus}
            handleSubmit={this.handleSubmit}
          />
        )
    }

    if (step === 4 && status === 'closed') {
      return (
        <OutComeAndDates
          values={values}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          onClickOutcome={this.onClickOutcome}
          onDatesChange={this.onDatesChange}
        />
      )
    } else if (step === 4 && status === 'active') {
      return (
        <SetOpenDate
          values={values}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          onOpenDateChange={this.onOpenDateChange}
          handleSubmit={this.handleSubmit}
        />
      )
    } else if (step === 4 && status === 'pending') {
      return (
        <InspectAndSubmitPending
          values={values}
          prevStep={this.prevStep}
          handleSubmit={this.handleSubmit}
        />
      )
    }

    if (step === 5 && status === 'closed') {
      return (
        <Execution
          values={values}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          onConclusionChange={this.onConclusionChange}
        />
      )
    } else if (step === 5 && status === 'active') {
      return (
        <InspectAndSubmitActive
          values={values}
          prevStep={this.prevStep}
          handleSubmit={this.handleSubmit}
        />
      )
    }

    if (step === 6 && status === 'closed') {
      return (
        <Management
          values={values}
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          onConclusionChange={this.onConclusionChange}
        />
      )
    }

    if (step === 7 && status === 'closed') {
      return (
        <InspectAndSubmitClosed
          values={values}
          prevStep={this.prevStep}
          handleSubmit={this.handleSubmit}
        />
      )
    }
  }
}

export default MainParentForm