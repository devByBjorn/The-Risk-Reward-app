import React from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay, DateRangePicker } from 'react-dates'

import {
  CheckboxBtn,
  RadioBtn,
  Textarea
} from '../inputs'

class OutcomeAndDates extends React.Component {
  state = {
    focusedInput: null,
    errorMsg: ''
  }
  continue = e => {
    const { values } = this.props
    e.preventDefault()

    if (!values.outcome) {
      this.setState(() => ({ errorMsg: 'Make sure to chose outcome of trade' }))
    } else {
      this.setState(() => ({ errorMsg: '' }))
      this.props.nextStep()
    }
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  onFocusChange = (focusedInput) => {
    this.setState(() => ({ focusedInput }))
  }
  render() {
    const { values, onClickOutcome, onDatesChange } = this.props

    return (
      <React.Fragment>
        { /*   <div>
          <ul>
            <li>Market: {values.market}</li>
            <li>Direction: {values.direction}</li>
            <li>Entry: {values.entry}</li>
            <li>Stop: {values.stop}</li>
            <li>Target: {values.target}</li>
            <li>Status: {values.status}</li>
          </ul>
    </div>*/}
        <CheckboxBtn
          name="outcome"
          value="win"
          checked={values.outcome === 'win' ? true : false}
          onClick={onClickOutcome}
        />
        <label>Win</label>

        <CheckboxBtn
          name="outcome"
          value="loss"
          checked={values.outcome === 'loss' ? true : false}
          onClick={onClickOutcome}
        />
        <label>Loss</label>

        <CheckboxBtn
          name="outcome"
          value="scratch"
          checked={values.outcome === 'scratch' ? true : false}
          onClick={onClickOutcome}
        />
        <label>Scratch</label>

        <label>Opened & Closed</label>
        <DateRangePicker
          startDate={values.opened}
          endDate={values.closed}
          onDatesChange={onDatesChange}
          focusedInput={this.state.focusedInput}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
          showClearDates={true}
          minimumNights={0}
        />

        {this.state.errorMsg && <p>{this.state.errorMsg}</p>}

        <button
          onClick={this.back}
        >Back</button>
        <button
          onClick={this.continue}
        >Continue</button>
      </React.Fragment>
    )
  }
}

export default OutcomeAndDates