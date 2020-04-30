import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import FormLabel from '@material-ui/core/FormLabel'
import formElementsStyled from '../components_style/formElementsStyled'

const FormStepThreeActive = ({ values, onOpenDateChange }) => {

  const classes = formElementsStyled()


  return (
    <div className={classes.dateWrapperSingle}>
      <div className={classes.date}>
        <FormLabel className={classes.formLabel}
        >Opened</FormLabel>
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
    </div>
  )
}

export default FormStepThreeActive