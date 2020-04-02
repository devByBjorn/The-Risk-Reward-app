import React from 'react'
import moment from 'moment'
import FirstAddForm from './FirstAddForm'
import ClosedTradeForm from './ClosedTradeForm'

import MarketAndDirection from './init-trade-steps/MarketAndDirection'
import StopEntryTarget from './init-trade-steps/StopEntryTarget'
import TradeStatus from './init-trade-steps/TradeStatus'


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
          management: props.trade.conclusion.management,
          whyNote: props.trade.conclusion.whyNote,
          improveNote: props.trade.conclusion.improveNote,
        })
        : ({
          execution: '',
          management: '',
          whyNote: '',
          improveNote: '',
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
    const entry = this.state.entry
    const stop = this.state.stop
    const target = this.state.target
    const outcome = this.state.outcome

    let rewardToRisk
    const long = this.state.direction === 'long'
    const short = this.state.direction === 'short'
    const win = outcome === 'win'
    const loss = outcome === 'loss'
    const scratch = outcome === 'scratch'
    const active = outcome === 'active'

    const longWin = (target - entry) / (entry - stop)
    const longLoss = (entry - stop) / (target - entry)
    const shortWin = (entry - target) / (stop - entry)
    const shortLoss = (stop - entry) / (entry - target)

    if (long && win) {
      rewardToRisk = longWin
    } else if (long && loss) {
      rewardToRisk = -Math.abs(longLoss)
    } else if (long && active) {
      rewardToRisk = longWin
    } else if (short && win) {
      rewardToRisk = shortWin
    } else if (short && loss) {
      rewardToRisk = -Math.abs(shortLoss)
    } else if (short && active) {
      rewardToRisk = shortWin
    } else if (scratch) {
      rewardToRisk = 0
    }
    return rewardToRisk.toFixed(2)
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
    if (!this.state.entry || !this.state.stop || !this.state.target
      || !this.state.direction) {
      this.setState(() => ({ inputError: 'Values for direction, entry, stop, and target must be given' }))
    } else {
      this.setState(() => ({ inputError: '' }))
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
          management: this.state.conclusion.management,
          whyNote: this.state.conclusion.whyNote,
          improveNote: this.state.conclusion.improveNote
        },
      })
      // switch status depending on active, pending, closed?? 
    }
  }

  render() {
    const { step } = this.state
    const { direction, market, entry, stop,
      target, outcome, rewardToRisk, opened, closed, period, inputError } = this.state
    const { execution, management, whyNote, improveNote } = this.state.conclusion

    const values = {
      direction, market, entry, stop, target, outcome, rewardToRisk,
      opened, closed, period, execution, management, whyNote, improveNote, inputError
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
            values={values}
            onClickStatus={this.onClickStatus}
          />
        )
      case 4:
        return (
          <h1>step 4</h1>
        )
    }


    if (step === 3) {
      <button onClick={this.handleSubmit}>Add Trade</button>
    }


    return (
      <div>Form process</div>
    )
  }
}

export default MainParentForm
