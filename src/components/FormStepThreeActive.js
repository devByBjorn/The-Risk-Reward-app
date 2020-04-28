import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { makeStyles } from '@material-ui/core/styles'
import formElementsStyled from '../components_style/formElementsStyled'

const FormStepThreeActive = ({ values, onOpenDateChange }) => {

  const classes = formElementsStyled()


  return (
    <div className={classes.date}>
      <label
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
    </div>
  )
}

export default FormStepThreeActive