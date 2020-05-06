import React from 'react'
import DatePicker from 'react-datepicker'
import FormLabel from '@material-ui/core/FormLabel'
import formElementsStyled from '../components_style/formElementsStyled'
import { DateContainer, DateWrapper } from '../components_style/FormDatesStyled'

const FormStepDateActive = ({ values, onOpenDateChange }) => {

  const classes = formElementsStyled()

  return (
    <DateContainer>
      <DateWrapper>
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
      </DateWrapper>
    </DateContainer>
  )
}

export default FormStepDateActive