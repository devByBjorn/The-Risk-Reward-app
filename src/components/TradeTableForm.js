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
    opened: '',
    closed: '',
    openedFocused: false,
    closedFocused: false,
    dateError: ''
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

    value.match(/^\d*(\.\d*)?$/)
      ? this.setState(() => ({ [name]: value }))
      : ''
  }

  onClickOutcome = (e) => {
    const outcome = e.target.value
    this.setState(() => ({ outcome }))
  }

  onOpenedChange = (e) => {
    const opened = moment(e)
    this.setState(() => ({ opened }))
  }

  onClosedChange = (e) => {
    const closed = moment(e)
    if (closed < this.state.opened) {
      this.setState(() => ({ dateError: 'closing date must be after opening date' }))
    } else {
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


  render() {
    return (
      <form>
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
        <label>Market</label>
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
          <textarea
            placeholder="Trade thoughts"
            type="text"
            value={this.state.note}
            onChange={this.onChangeNote}
          />
          <button><FontAwesomeIcon icon={questionIcon} /></button>
        </div>
        <button>Add</button>
      </form>
    )
  }
}

export default TradeTableForm