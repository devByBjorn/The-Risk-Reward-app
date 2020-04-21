import React, { useState } from 'react'
import moment from 'moment'

import { isInclusivelyBeforeDay, DateRangePicker } from 'react-dates'
import { CheckboxBtn } from './inputs'
import Btn from './Btn'

const OutcomeAndDates = ({ values, nextStep, prevStep, onChangeByInput, onDatesChange }) => {
  const [errorMsg, setErrorMsg] = useState('')
  const [focused, setFocused] = useState(null)

  const next = e => {
    e.preventDefault()
    if (!values.outcome) {
      setErrorMsg('Make sure to chose an outcome')
    } else if (!values.opened) {
      setErrorMsg('Make sure you set opening date')
    } else if (!values.closed) {
      setErrorMsg('Make Sure you set closing date')
    } else {
      setErrorMsg('')
      nextStep()
    }
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <React.Fragment>
      <CheckboxBtn
        name="outcome"
        value="win"
        checked={values.outcome === 'win' ? true : false}
        onChange={onChangeByInput}
      />
      <label>Win</label>

      <CheckboxBtn
        name="outcome"
        value="loss"
        checked={values.outcome === 'loss' ? true : false}
        onChange={onChangeByInput}
      />
      <label>Loss</label>

      <CheckboxBtn
        name="outcome"
        value="scratch"
        checked={values.outcome === 'scratch' ? true : false}
        onChange={onChangeByInput}
      />
      <label>Scratch</label>

      <label>Opened & Closed</label>
      <DateRangePicker
        startDate={values.opened}
        startDateId="startDateId"
        endDate={values.closed}
        endDateId="endDateId"
        onDatesChange={onDatesChange}
        focusedInput={focused}
        onFocusChange={(focused) => setFocused(focused)}
        numberOfMonths={1}
        isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
        showClearDates={true}
        minimumNights={0}
      />

      {errorMsg && <p>{errorMsg}</p>}

      <Btn
        text="Back"
        onClick={back}
      />
      <Btn
        text="Next"
        onClick={next}
      />
    </React.Fragment>
  )
}

export default OutcomeAndDates