import React from 'react'
import moment from 'moment'
import { isInclusivelyBeforeDay, DateRangePicker } from 'react-dates'
import { CheckboxBtn } from '../../../utilities/inputs'
import Btn from '../../../utilities/Btn'

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

        <Btn
          text="Back"
          onClick={this.back}
        />
        <Btn
          text="Next"
          onClick={this.continue}
        />
      </React.Fragment>
    )
  }
}

export default OutcomeAndDates