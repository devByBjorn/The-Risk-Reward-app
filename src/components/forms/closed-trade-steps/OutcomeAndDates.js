import React from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'

import {
  CheckboxBtn,
  RadioBtn,
  Textarea
} from '../inputs'

class ClosedTradeForm extends React.Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, onClickOutcome, onClosedChange, onOpenedChange, onOpenedFocusChange, onClosedFocusChange, } = this.props

    return (
      <React.Fragment>
        <div>
          <ul>
            <li>Market: {values.market}</li>
            <li>Direction: {values.direction}</li>
            <li>Entry: {values.entry}</li>
            <li>Stop: {values.stop}</li>
            <li>Target: {values.target}</li>
            <li>Status: {values.status}</li>
          </ul>
        </div>
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

        <label>Opened</label>
        <SingleDatePicker
          date={values.opened}
          onDateChange={onOpenedChange}
          focused={values.openedFocused}
          onFocusChange={onOpenedFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
        />

        {values.dateError && <p>{values.dateError}</p> /* Date error message*/}

        <label>Closed</label>
        <SingleDatePicker
          date={values.closed}
          onDateChange={onClosedChange}
          focused={values.closedFocused}
          onFocusChange={onClosedFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
        />
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

export default ClosedTradeForm