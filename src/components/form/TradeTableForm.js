import React from 'react'
import moment from 'moment'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { questionIcon } from '../../icons/icons'

// Look into using a third party library for forms

class TradeTableForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: props.trade ? props.trade.direction : '',
      market: props.trade ? props.trade.market : '',
      entry: props.trade ? props.trade.entry : '',
      stop: props.trade ? props.trade.stop : '',
      target: props.trade ? props.trade.target : '',
      outcome: props.trade ? props.trade.outcome : '',
      outcomeInfo: '',
      toggleInfo: false,
      inputError: '',
      opened: props.trade ? moment(props.trade.opened) : '',
      closed: props.trade ? moment(props.trade.closed) : '',
      openedFocused: false,
      closedFocused: false,
      dateError: '',
      conclusion: props.trade ? props.trade.conclusion : {
        execution: '',
        management: '',
        whyNote: '',
        improveNote: '',
      }
    }
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
    const outcome = this.state.outcome

    let rewardToRisk
    const long = this.state.direction === 'long'
    const short = this.state.direction === 'short'
    const win = outcome === 'win'
    const loss = outcome === 'loss'

    const longWin = (target - entry) / (entry - stop)
    const longLoss = (entry - stop) / (target - entry)

    const shortWin = (entry - target) / (stop - entry)
    const shortLoss = (stop - entry) / (entry - target)


    if (long && win) {
      rewardToRisk = longWin
    } else if (long && loss) {
      rewardToRisk = -Math.abs(longLoss)
    } else if (long && !outcome) {
      rewardToRisk = longWin
    } else if (short && win) {
      rewardToRisk = shortWin
    } else if (short && loss) {
      rewardToRisk = -Math.abs(shortLoss)
    } else if (short && !outcome) {
      rewardToRisk = shortWin
    }

    return rewardToRisk.toFixed(2)
  }

  onClickOutcome = (e) => {
    const outcome = e.target.value
    this.setState(() => ({ outcome }))
  }

  onClickQuestion = () => {
    let toggleInfo = !this.state.toggleInfo

    if (toggleInfo) {
      this.setState(() => ({
        outcomeInfo: 'If no outcome is given, the calcualtion for R will be as if the trade was a winner. You can always edit this afterwards',
        toggleInfo
      }))
    } else {
      this.setState(() => ({
        outcomeInfo: '',
        toggleInfo
      }))
    }
  }

  // Opening date must have a value
  // If there is a closing value(not null) the opening value
  // needs to be less than closing value
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

  // User might register the trade before it is closed therefore -
  // closing date do not need a value to submit
  // But if value is given it must be greater than opening date
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

  onClearDate = () => {

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
        outcome: this.state.outcome,
        opened: this.state.opened.valueOf(),
        closed: this.state.closed.valueOf(),
        period: this.state.closed && this.state.opened ? (this.state.closed - this.state.opened).valueOf() : '',
        rewardToRisk: parseFloat(this.calculateRewardToRisk()),
        conclusion: this.state.conclusion && {
          execution: this.state.conclusion.execution,
          management: this.state.conclusion.management,
          whyNote: this.state.conclusion.whyNote,
          improveNote: this.state.conclusion.whyNote
        },
      })
    }
  }

  render() {
    return (
      <form onSubmit={e => {
        this.handleSubmit(e)
      }}>
        {this.state.inputError && <p>{this.state.inputError}</p>}

        <h4>Direction</h4>
        <input
          type="radio"
          name="direction"
          value="long"
          checked={this.state.direction === 'long' ? true : false}
          onClick={this.onClickDirection}
        />
        <label>Long</label>
        <input
          type="radio"
          name="direction"
          value="short"
          checked={this.state.direction === 'short' ? true : false}
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
          type="checkbox"
          name="outcome"
          value="win"
          checked={this.state.outcome === 'win' ? true : false}
          onClick={this.onClickOutcome}
        />
        <label>Win</label>
        <input
          type="checkbox"
          name="outcome"
          value="loss"
          checked={this.state.outcome === 'loss' ? true : false}
          onClick={this.onClickOutcome}
        />
        <label>Loss</label>
        {this.state.outcomeInfo && <p>{this.state.outcomeInfo}</p>} {/* info about win/loss*/}
        <button
          type="button"
          onClick={this.onClickQuestion}
        ><FontAwesomeIcon icon={questionIcon} />
        </button>
        <div>
          <label>Opened</label>
          <SingleDatePicker
            date={this.state.opened}
            onDateChange={this.onOpenedChange}
            focused={this.state.openedFocused}
            onFocusChange={this.onOpenedFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
          />
          <button
            type="button"
            onClick={() => this.setState(() => ({ opened: '' }))}
          > X</button> { /*clear date*/}
        </div>
        <div>

          {this.state.dateError && <p>{this.state.dateError}</p> /* Date error message*/}
          <label>Closed</label>
          <SingleDatePicker
            date={this.state.closed}
            onDateChange={this.onClosedChange}
            focused={this.state.closedFocused}
            onFocusChange={this.onClosedFocusChange}
            numberOfMonths={1}
            isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
          />
          <button
            type="button"
            onClick={() => this.setState(() => ({ closed: '' }))}
          >X</button> { /*clear date*/}
        </div>

        <br />
        <div>
          <h4>Conclusion</h4>
          <div>
            <label>Execution: </label>
            <label>Good</label>
            <input
              type="radio"
              name="execution"
              value="good"
              checked={this.state.conclusion.execution === 'good' ? true : false}
              onClick={this.onConclusionChange}
            />
            <label>Poor</label>
            <input
              type="radio"
              name="execution"
              value="poor"
              checked={this.state.conclusion.execution === 'poor' ? true : false}
              onClick={this.onConclusionChange}
            />
            <label>Both</label>
            <input
              type="radio"
              name="execution"
              value="both"
              checked={this.state.conclusion.execution === 'both' ? true : false}
              onClick={this.onConclusionChange}
            />
          </div>

          <div>
            <label>Trade management: </label>
            <label>Good</label>
            <input
              type="radio"
              name="management"
              value="good"
              checked={this.state.conclusion.management === 'good' ? true : false}
              onClick={this.onConclusionChange}
            />
            <label>Poor</label>
            <input
              type="radio"
              name="management"
              value="poor"
              checked={this.state.conclusion.management === 'poor' ? true : false}
              onClick={this.onConclusionChange}
            />
            <label>Both</label>
            <input
              type="radio"
              name="management"
              value="both"
              checked={this.state.conclusion.management === 'both' ? true : false}
              onClick={this.onConclusionChange}
            />
          </div>
          <div>
            <textarea
              placeholder="Why?"
              type="text"
              name="whyNote"
              value={this.state.conclusion.whyNote}
              onChange={this.onConclusionChange}
            />
            <textarea
              placeholder="How to improve?"
              type="text"
              name="improveNote"
              value={this.state.conclusion.improveNote}
              onChange={this.onConclusionChange}
            />
          </div>
        </div>
        <button
        >Add</button>
      </form>
    )
  }
}

export default TradeTableForm

