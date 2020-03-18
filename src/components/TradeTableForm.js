import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { questionIcon } from '../icons/icons'

const setOutSideDateRange = () => false

class TradeTableForm extends React.Component {
  state = {
    direction: '',
    market: '',
    entry: '',
    stop: '',
    target: '',
    outcome: '',
    inputError: '',
    opened: moment(),
    closed: moment(),
    openedFocused: false,
    closedFocused: false,
    dateError: '',
    conclusion: '',
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

  calculateRewardToRisk = () => {
    const entry = this.state.entry
    const stop = this.state.stop
    const target = this.state.target
    const direction = this.state.direction
    const outcome = this.state.outcome

    const longWin = (target - entry) / (entry - stop)
    const longLoss = (entry - stop) / (target - entry)
    const shortWin = (entry - target) / (stop - entry)
    const shortLoss = (stop - entry) / (entry - target)

    let rewardToRisk

    if (direction === 'long' && outcome === 'win') {
      rewardToRisk = Math.abs(longWin)
    } else if (direction === 'long' && outcome === 'loss') {
      rewardToRisk = -Math.abs(longLoss)
    } else if (direction === 'short' && outcome === 'win') {
      rewardToRisk = Math.abs(shortWin)
    } else if (direction === 'short' && outcome === 'loss') {
      rewardToRisk = -Math.abs(shortLoss)
    }

    return rewardToRisk.toFixed(2)
  }

  onClickOutcome = (e) => {
    const outcome = e.target.value
    this.setState(() => ({ outcome }))
  }

  // Opening date must have a value
  // If there is a closing value(not null) the opening value
  // needs to be less than closing value
  onOpenedChange = (opened) => {
    const closed = this.state.closed

    if (closed && opened > closed) {
      this.setState(() =>
        ({ dateError: 'opening date must come before closing date' }))
    } else if (!closed && opened || opened < closed) {
      this.setState(() => ({ opened }))
      this.setState(() => ({ dateError: '' }))
    }
  }

  // User might register the trade before it is closed therefore -
  // closing date do not need a value to submit
  // But if value is given it must be greater than opening date
  onClosedChange = (closed) => {
    const opened = this.state.opened

    if (closed && closed < opened) {
      this.setState(() =>
        ({ dateError: 'closing date must come after opening date' }))
    } else if (!closed || closed > opened) {
      this.setState(() => ({ closed }))
      this.setState(() => ({ dateError: '' }))
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

  onChangeConclusion = (e) => {
    const conclusion = e.target.value
    this.setState(() => ({ conclusion }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    if (!this.state.entry || !this.state.stop
      || !this.state.target || !this.state.direction) {
      this.setState(() => ({ inputError: 'Values for direction, entry, stop, and target must be given' }))
    } else {
      this.setState(() => ({ inputError: '' }))
      this.props.handleSubmit({
        market: this.state.market.toUpperCase(),
        direction: this.state.direction,
        opened: this.state.opened.valueOf(),
        closed: this.state.closed.valueOf(),
        period: (this.state.closed - this.state.opened).valueOf(),
        outcome: this.state.outcome,
        rewardToRisk: parseFloat(this.calculateRewardToRisk()),
        thoughts: this.state.thoughts
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {<p>{this.state.inputError}</p>}

        <h4>Direction</h4>
        <input
          type="radio"
          name="direction"
          value="long"
          onClick={this.onClickDirection}
        />
        <label>Long</label>
        <input
          type="radio"
          name="direction"
          value="short"
          onClick={this.onClickDirection}
        />
        <label>Short</label>
        <br />
        <label>Market/ Equity</label>
        <input
          type="text"
          value={this.state.market}
          onChange={this.onChangeMarket}
        />
        <label>Entry</label>
        <input
          type="text"
          name="entry"
          value={this.state.entry}
          onChange={this.onChangeValue}
        />
        <label>Stop</label>
        <input
          type="text"
          name="stop"
          value={this.state.stop}
          onChange={this.onChangeValue}
        />
        <label>Target</label>
        <input
          type="text"
          name="target"
          value={this.state.target}
          onChange={this.onChangeValue}
        /> <br />
        <input
          type="radio"
          name="outcome"
          value="win"
          onClick={this.onClickOutcome}
        />
        <label>Win</label>
        <input
          type="radio"
          name="outcome"
          value="loss"
          onClick={this.onClickOutcome}
        />
        <label>Loss</label>
        <div>
          <label>Trade opened</label>
          <SingleDatePicker
            date={this.state.opened}
            onDateChange={this.onOpenedChange}
            focused={this.state.openedFocused}
            onFocusChange={this.onOpenedFocusChange}
            numberOfMonths={1}
            isOutsideRange={setOutSideDateRange}
          />
        </div>
        <div>
          {this.state.dateError && <p>{this.state.dateError}</p>}
          <label>Trade closed</label>
          <SingleDatePicker
            date={this.state.closed}
            onDateChange={this.onClosedChange}
            focused={this.state.closedFocused}
            onFocusChange={this.onClosedFocusChange}
            numberOfMonths={1}
            isOutsideRange={setOutSideDateRange}
          />
        </div>

        <br />
        <div>
          <h4>Conclusion</h4>
          <label>Did well</label>
          <input
            type="radio"
            name="performance"
            value="well"
          ></input>
          <label>Did poprly</label>
          <input
            type="radio"
            name="performance"
            value="poorly"
          ></input>
          <textarea
            placeholder="Why"
            type="text"
            value={this.state.conclusion}
            onChange={this.onChangeThoughts}
          />
          <textarea
            placeholder="How to improve?"
            type="text"
            value={this.state.conclusion}
            onChange={this.onChangeThoughts}
          />
          <button><FontAwesomeIcon icon={questionIcon} /></button>
        </div>
        <button
          onSubmit={this.onSubmit}
        >Add</button>
      </form>
    )
  }
}

export default TradeTableForm