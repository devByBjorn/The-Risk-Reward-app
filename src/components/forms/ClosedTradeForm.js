import React from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import {
  CheckboxBtn,
  RadioBtn,
  Textarea
} from './inputs'

class ClosedTradeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    this.setState(() => ({ inputError: '' }))
    this.props.handleSubmit({
      outcome: this.state.outcome,
      opened: this.state.opened ? this.state.opened.valueOf() : '',
      closed: this.state.closed ? this.state.closed.valueOf() : '',
      period: this.state.closed && this.state.opened ? (this.state.closed - this.state.opened).valueOf() : '',
      conclusion: this.state.conclusion && {
        execution: this.state.conclusion.execution,
        management: this.state.conclusion.management,
        whyNote: this.state.conclusion.whyNote,
        improveNote: this.state.conclusion.improveNote
      },
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CheckboxBtn
          name="outcome"
          value="win"
          checked={this.state.outcome === 'win' ? true : false}
          onClick={this.onClickOutcome}
        />
        <label>Win</label>

        <CheckboxBtn
          name="outcome"
          value="loss"
          checked={this.state.outcome === 'loss' ? true : false}
          onClick={this.onClickOutcome}
        />
        <label>Loss</label>

        <CheckboxBtn
          name="outcome"
          value="scratch"
          checked={this.state.outcome === 'scratch' ? true : false}
          onClick={this.onClickOutcome}
        />
        <label>Scratch</label>
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
            <RadioBtn
              name="execution"
              value="good"
              checked={this.state.conclusion.execution === 'good' ? true : false}
              onClick={this.onConclusionChange}
            />
            <label>Poor</label>
            <RadioBtn
              name="execution"
              value="poor"
              checked={this.state.conclusion.execution === 'poor' ? true : false}
              onClick={this.onConclusionChange}
            />
            <label>Both</label>
            <RadioBtn
              name="execution"
              value="both"
              checked={this.state.conclusion.execution === 'both' ? true : false}
              onClick={this.onConclusionChange}
            />
          </div>

          <div>
            <label>Trade management: </label>
            <label>Good</label>
            <RadioBtn
              name="management"
              value="good"
              checked={this.state.conclusion.management === 'good' ? true : false}
              onClick={this.onConclusionChange}
            />
            <label>Poor</label>
            <RadioBtn
              name="management"
              value="poor"
              checked={this.state.conclusion.management === 'poor' ? true : false}
              onClick={this.onConclusionChange}
            />
            <label>Both</label>
            <RadioBtn
              name="management"
              value="both"
              checked={this.state.conclusion.management === 'both' ? true : false}
              onClick={this.onConclusionChange}
            />
          </div>
          <div>
            <Textarea
              placeholder="Why?"
              name="whyNote"
              value={this.state.conclusion.whyNote}
              onChange={this.onConclusionChange}
            />
            <Textarea
              placeholder="How to improve?"
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

export default ClosedTradeForm