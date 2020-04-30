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
import formElementsStyled from '../components_style/formElementsStyled'
import FormNav from './FormNav'

const FormStepOne = ({
  values,
  navigateByStepValue,
  nextStep,
  prevStep,
  onChangeByInput
}) => {
  const { market, direction, setup } = values
  const classes = formElementsStyled()
  const [error, setError] = useState(false)

  const next = e => {
    e.preventDefault()
    if (!market || !direction || !setup) {
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
        <TextField
          className={classes.textField}
          error={!market && error}
          label="Market"
          name='market'
          value={market}
          onChange={onChangeByInput}
          placeholder="Market"
        />
        <div className={classes.lineBreak} />
        <FormControl
          component="fieldset"
          error={!direction && error}
          className={classes.formControl}>
          <FormLabel
            className={classes.formLabel}
            component="legend">Direction</FormLabel>
          <RadioGroup aria-label="direction" name="direction">
            <FormControlLabel
              value="long"
              control={<Radio />}
              label="Long"
              checked={direction === 'long' ? true : false}
              onChange={onChangeByInput}
            />
            <br />
            <FormControlLabel
              value="short"
              control={<Radio />}
              label="Short"
              checked={direction === 'short' ? true : false}
              onChange={onChangeByInput}
            />
          </RadioGroup>
        </FormControl>
        <TextField
          className={classes.textField}
          error={!setup && error}
          label="Setup"
          name="setup"
          value={setup}
          onChange={onChangeByInput}
          placeholder="Setup"
        />

        <div className={classes.buttonContainer}>
          <Button
            className={classes.button}
            onClick={back}
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

export default FormStepOne