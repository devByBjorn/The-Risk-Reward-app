import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import FormPageContainer from '../components_style/FormPageContainerStyled'
import FormContainer from '../components_style/FormContainerStyled'
import FormStepDatesClosed from './FormStepDatesClosed'
import FormStepDateActive from './FormStepDateActive'
import formElementsStyled from '../components_style/formElementsStyled'
import FormNav from './FormNav'

const FormStepStatusDatesOutcome = ({
  values,
  onChangeByInput,
  onClosedDateChange,
  onOpenDateChange,
  navigateByStepValue,
  nextStep,
}) => {

  const classes = formElementsStyled()
  const { status, outcome, step } = values
  const [error, setError] = useState(false)

  const next = e => {
    e.preventDefault()
    if (!status) {
      setError(true)
    } else if (status === 'closed' && !outcome) {
      setError(true)
    } else {
      setError(false)
      nextStep()
    }
  }

  return (
    <FormPageContainer>
      <FormNav
        values={values}
        navigateByStepValue={navigateByStepValue}
      />
      <FormContainer>
        <FormControl
          component="fieldset"
          error={!status && error}
          className={classes.formControl}
        >
          <FormLabel
            className={classes.formLabel}
            component="legend">Status</FormLabel>
          <RadioGroup aria-label="status" name="status">
            <FormControlLabel
              value="closed"
              control={<Radio />}
              label="Closed"
              checked={status === 'closed' ? true : false}
              onChange={onChangeByInput}
            />
            <FormControlLabel
              value="active"
              control={<Radio />}
              label="Active"
              checked={status === 'active' ? true : false}
              onChange={onChangeByInput}
            />
            <FormControlLabel
              value="pending"
              control={<Radio />}
              label="Pending"
              checked={status === 'pending' ? true : false}
              onChange={onChangeByInput}
            />
          </RadioGroup>
        </FormControl>

        {status === 'closed' &&
          <FormStepDatesClosed
            error={error}
            values={values}
            onChangeByInput={onChangeByInput}
            onClosedDateChange={onClosedDateChange}
            onOpenDateChange={onOpenDateChange}
          />
        }
        {status === 'active' &&
          <FormStepDateActive
            values={values}
            onOpenDateChange={onOpenDateChange}
          />
        }

        <div className={classes.buttonContainer}>
          <Button
            disabled={true}
            className={classes.buttonInactive}
          >Back</Button>
          <Button
            className={classes.button}
            onClick={next}
          >Next</Button>

        </div>
      </FormContainer>
    </FormPageContainer>
  )
}

export default FormStepStatusDatesOutcome