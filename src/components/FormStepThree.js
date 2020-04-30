import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import FormPageContainer from '../components_style/FormPageContainerStyled'
import FormContainer from '../components_style/FormContainerStyled'

import FormStepThreeClosed from './FormStepThreeClosed'
import FormStepThreeActive from './FormStepThreeActive'
import formElementsStyled from '../components_style/formElementsStyled'
import FormNav from './FormNav'

const FormStepThree = ({
  values,
  onChangeByInput,
  onClosedDateChange,
  onOpenDateChange,
  navigateByStepValue,
  nextStep,
}) => {

  const classes = formElementsStyled()
  const { status, outcome, } = values

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

  const back = e => {
    e.preventDefault()
    prevStep()
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
          <FormStepThreeClosed
            error={error}
            values={values}
            onChangeByInput={onChangeByInput}
            onClosedDateChange={onClosedDateChange}
            onOpenDateChange={onOpenDateChange}
          />
        }
        {status === 'active' &&
          <FormStepThreeActive
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

export default FormStepThree