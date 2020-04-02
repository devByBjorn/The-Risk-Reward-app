import React from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'

import {
  CheckboxBtn,
  RadioBtn,
  Textarea
} from './inputs'

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
    const { values, onClickOutcome, onClosedChange, onOpenedChange, onOpenedFocusChange, onClosedFocusChange, onConclusionChange, handleSubmit } = this.props

    return (
      <React.Fragment>
        <form onSubmit={handleSubmit}>
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


          <br />

          <h4>Conclusion</h4>

          <label>Execution: </label>
          <label>Good</label>
          <RadioBtn
            name="execution"
            value="good"
            checked={values.execution === 'good' ? true : false}
            onClick={onConclusionChange}
          />
          <label>Poor</label>
          <RadioBtn
            name="execution"
            value="poor"
            checked={values.execution === 'poor' ? true : false}
            onClick={onConclusionChange}
          />
          <label>Both</label>
          <RadioBtn
            name="execution"
            value="both"
            checked={values.execution === 'both' ? true : false}
            onClick={onConclusionChange}
          />

          <label>Trade management: </label>
          <label>Good</label>
          <RadioBtn
            name="management"
            value="good"
            checked={values.management === 'good' ? true : false}
            onClick={onConclusionChange}
          />
          <label>Poor</label>
          <RadioBtn
            name="management"
            value="poor"
            checked={values.management === 'poor' ? true : false}
            onClick={onConclusionChange}
          />
          <label>Both</label>
          <RadioBtn
            name="management"
            value="both"
            checked={values.management === 'both' ? true : false}
            onClick={onConclusionChange}
          />

          <Textarea
            placeholder="Why?"
            name="whyNote"
            value={values.whyNote}
            onChange={onConclusionChange}
          />
          <Textarea
            placeholder="How to improve?"
            name="improveNote"
            value={values.improveNote}
            onChange={onConclusionChange}
          />


          <button
            onClick={handleSubmit}
          >continue</button>
        </form>
      </React.Fragment>
    )
  }
}

export default ClosedTradeForm