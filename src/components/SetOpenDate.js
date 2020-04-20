import React, { useState } from 'react'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import moment from 'moment'
import Btn from './Btn'


const SetOpenDateForActive = ({ values, nextStep, prevStep, onOpenDateChange }) => {
  const [focused, setFocused] = useState(false)

  const next = e => {
    e.preventDefault()
    nextStep()
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }
  return (
    <React.Fragment>
      <label>Opened</label>
      <SingleDatePicker
        date={values.opened}
        onDateChange={onOpenDateChange}
        focused={focused}
        onFocusChange={(focused) => setFocused(focused)}
        numberOfMonths={1}
        isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
      />
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

export default SetOpenDateForActive