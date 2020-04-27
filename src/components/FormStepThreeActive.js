import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import moment from 'moment'
import Btn from './Btn'


const FormStepThreeActive = ({ values, onOpenDateChange }) => {
  const [error, setError] = useState(false)

  return (
    <React.Fragment>
      <label
        error={!values.opened && error}
      >Opened</label>
      <DatePicker
        dateFormat="MMM d, yyyy hh:mm"
        maxDate={new Date()}
        onChange={onOpenDateChange}
        selected={values.opened}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
      />
    </React.Fragment>
  )
}

export default FormStepThreeActive