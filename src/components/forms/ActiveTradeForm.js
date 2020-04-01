import React from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import {
  CheckboxBtn,
  RadioBtn,
  Textarea
} from './inputs'

class ActiveTradeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: props.trade ? moment(props.trade.opened) : moment(),
      openedFocused: false,
    }
  }
  onOpenedChange = (opened) => {
    this.setState(() => ({ opened }))
  }
  onOpenedFocusChange = () => {
    const openedFocused = !this.state.openedFocused
    this.setState(() => ({ openedFocused }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit({
      opened: this.state.opened ? this.state.opened.valueOf() : '',
    })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        >Add</button>
      </form>
    )
  }
}

export default ActiveTradeForm