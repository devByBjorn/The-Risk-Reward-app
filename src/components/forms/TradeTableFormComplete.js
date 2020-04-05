import React from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import { calculatePositiveR, calculateNegativeR } from '../../calculate-r/riskRewardCalculation'
import {
  CheckboxBtn,
  RadioBtn,
  TextInput,
  Textarea
} from '../utilities/inputs'

// Look into using a third party library for forms

class TradeTableForm extends React.Component {
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
          whyExecution: props.trade.conclusion.whyExecution,
          improveExecution: props.trade.conclusion.improveExecution,
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
    // switch status depending on active, pending, closed?? 
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.inputError && <p>{this.state.inputError}</p>}

        <label>Direction</label>

        <RadioBtn
          name="direction"
          value="long"
          checked={this.state.direction === 'long' ? true : false}
          onClick={this.onClickDirection}
        />
        <label>Long</label>

        <RadioBtn
          name="direction"
          value="short"
          checked={this.state.direction === 'short' ? true : false}
          onClick={this.onClickDirection}
        />
        <label>Short</label>
        <br />

        <label>Market/ Equity</label>
        <TextInput
          name='market'
          value={this.state.market}
          onChange={this.onChangeMarket}
        />

        <label>Entry</label>
        <TextInput
          name="entry"
          value={this.state.entry}
          onChange={this.onChangeValue}
        />

        <label>Stop</label>
        <TextInput
          name="stop"
          value={this.state.stop}
          onChange={this.onChangeValue}
        />

        <label>Target</label>
        <TextInput
          name="target"
          value={this.state.target}
          onChange={this.onChangeValue}
        /> <br />

        <label>Status</label>
        <button
          type="button"
          name="status"
          value="closed"
          onClick={this.onClickStatus}
        > Closed</button>
        <button
          type="button"
          name="status"
          value="active"
          onClick={this.onClickStatus}
        > Active</button>
        <button
          type="button"
          name="status"
          value="pending"
          onClick={this.onClickStatus}
        > Pending</button>

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

        <CheckboxBtn
          name="outcome"
          value="active"
          checked={this.state.outcome === 'active' ? true : false}
          onClick={this.onClickOutcome}
        />
        <label>Active</label>
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
            <Textarea
              placeholder="Why?"
              name="whyExecution"
              value={this.state.conclusion.whyExecution}
              onChange={this.onConclusionChange}
            />
            <Textarea
              placeholder="How to improve?"
              name="improveExecution"
              value={this.state.conclusion.improveExecution}
              onChange={this.onConclusionChange}
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
              name="whyManagement"
              value={this.state.conclusion.whyManagement}
              onChange={this.onConclusionChange}
            />
            <Textarea
              placeholder="How to improve?"
              name="improveManagement"
              value={this.state.conclusion.improveManagement}
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
