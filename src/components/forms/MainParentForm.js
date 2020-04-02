import React from 'react'
import moment from 'moment'
import { calculatePositiveR, calculateNegativeR } from '../../calculate-r/riskRewardCalculation'

import MarketAndDirection from './init-trade-steps/MarketAndDirection'
import StopEntryTarget from './init-trade-steps/StopEntryTarget'
import TradeStatus from './init-trade-steps/TradeStatus'

import OutComeAndDates from './closed-trade-steps/OutcomeAndDates'
import Execution from './closed-trade-steps/Execution'
import Management from './closed-trade-steps/Management'

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
      outcomeInfo: '',
      toggleInfo: false,
      inputError: '',
      opened: props.trade ? moment(props.trade.opened) : moment(),
      closed: props.trade ? moment(props.trade.closed) : moment(),
      openedFocused: false,
      closedFocused: false,
      dateError: '',
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

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state
    this.setState(() => ({ step: step + 1 }))
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state
    this.setState(() => ({ step: step - 1 }))
  };

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

    return rewardToRisk
  }

  onClickOutcome = (e) => {
    const outcome = e.target.value
    this.setState(() => ({ outcome }))
  }

  // Opening date must have a value and be less than closed
  onOpenedChange = (opened) => {
    const closed = this.state.closed

    if (closed && opened > closed) {
      this.setState(() =>
        ({ dateError: 'opening date must come before closing date' }))
    } else if (!closed && opened || opened <= closed) {
      this.setState(() => ({
        opened,
        dateError: ''
      }))
    }
  }

  // Closed value needs to be greater than open date value
  onClosedChange = (closed) => {
    const opened = this.state.opened
    if (closed && closed < opened) {
      this.setState(() =>
        ({ dateError: 'closing date must come after opening date' }))
    } else if (!closed || closed >= opened) {
      this.setState(() => ({
        closed,
        dateError: ''
      }))
    }
  }

  onOpenedFocusChange = () => {
    const openedFocused = !this.state.openedFocused
    this.setState(() => ({ openedFocused }))
  }

  onClosedFocusChange = () => {
    const closedFocused = !this.state.closedFocused
    this.setState(() => ({ closedFocused }))
  }

  onConclusionChange = (e) => {
    const name = e.target.name
    const value = e.target.value

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
    const { step } = this.state

    const {
      direction, market, entry, stop,
      target, outcome, rewardToRisk, status,
      opened, closed, period, inputError
    } = this.state

    const {
      execution, management,
      whyExecution, improveExecution,
      whyManagement, improveManagement
    } = this.state.conclusion

    const values = {
      direction, market,
      entry, stop, target,
      outcome, rewardToRisk,
      opened, closed, period,
      execution, management,
      whyExecution, improveExecution,
      whyManagement, improveManagement,
      inputError,
    }

    switch (step) {
      case 1:
        return (<MarketAndDirection
          nextStep={this.nextStep}
          values={values}
          onClickDirection={this.onClickDirection}
          onChangeMarket={this.onChangeMarket}
          onChangeValue={this.onChangeValue}
          onClickStatus={this.onClickStatus}
        />)
      case 2:
        return (<StopEntryTarget
          prevStep={this.prevStep}
          nextStep={this.nextStep}
          values={values}
          onChangeValue={this.onChangeValue}
        />)

      case 3:
        return (
          <TradeStatus
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
            onClickStatus={this.onClickStatus}
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
          onClosedChange={this.onClosedChange}
          onOpenedChange={this.onOpenedChange}
          onOpenedFocusChange={this.onOpenedFocusChange}
          onClosedFocusChange={this.onClosedFocusChange}
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
    }

    if (step === 6 && status === 'closed') {
      return (
        <Management
          values={values}
          prevStep={this.prevStep}
          handleSubmit={this.handleSubmit}
          onConclusionChange={this.onConclusionChange}
        />
      )
    }

    // <button onClick={this.handleSubmit}>Add Trade</button>



    return (
      <div>Back to table - Add another trade</div>
    )
  }
}

export default MainParentForm
