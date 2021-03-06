import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormPageContainer from '../components_style/FormPageContainerStyled'
import FormContainer from '../components_style/FormContainerStyled'
import FormNav from './FormNav'
//import FormNavTwo from './FormNavTwo'
import formElementsStyled from '../components_style/formElementsStyled'

const FormStepEntryStopTarget = ({
  values,
  nextStep,
  navigateByStepValue,
  prevStep,
  onChangeValue,
}) => {

  const classes = formElementsStyled()
  const { entry, stop, target, exit, direction, status } = values

  const [error, setError] = useState(false)
  const [stopInfo, setStopInfo] = useState(' ')
  const [targetInfo, setTargetInfo] = useState(' ')

  const stopLogicLong = parseFloat(stop) <= parseFloat(entry)
  const stopLogicShort = parseFloat(stop) >= parseFloat(entry)
  const targetLogicLong = parseFloat(entry) <= parseFloat(target)
  const targetLogicShort = parseFloat(entry) >= parseFloat(target)

  const next = e => {
    e.preventDefault()
    if (!entry || !stop) {
      setError(true)
    } else if (stopLogicShort && direction === 'long') {
      setStopInfo('Stop must be below entry when trade direction is long')
    } else if (stopLogicLong && direction === 'short') {
      setStopInfo('Stop must be above entry when trade direction is short')
    } else if (targetLogicShort && direction === 'long') {
      setTargetInfo('Target must be above entry when trade direction is long')
    } else if (targetLogicLong && direction === 'short') {
      setTargetInfo('Target must be below entry when trade direction is short')
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
          error={!entry && error}
          label="Entry"
          name="entry"
          value={entry}
          onChange={onChangeValue}
          placeholder="Entry"
        />

        <TextField
          className={classes.textField}
          error={!stop && error}
          label="Initial stop"
          name="stop"
          value={stop}
          onChange={onChangeValue}
          placeholder="Initial stop"
        />
        <FormHelperText
          error={false}
          className={classes.helperText}
          children={stopInfo}
        />

        <TextField
          className={classes.textField}
          label="Initial target"
          name="target"
          value={target}
          onChange={onChangeValue}
          placeholder="Initial target"
        />
        <FormHelperText
          className={classes.helperText}
          children={targetInfo}
        />
        {status === 'closed' &&
          <TextField
            className={classes.textField}
            label="Actual exit"
            name="exit"
            value={exit}
            onChange={onChangeValue}
            placeholder="Actual exit"
          />
        }
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

export default FormStepEntryStopTarget