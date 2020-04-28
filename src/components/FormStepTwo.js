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

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: theme.spacing(5, 0, 0, 0),
    width: '100%',
  },
  button: {
    background: '#f50057',
    color: '#fff',
    margin: theme.spacing(1, 1, 0, 0),
    width: '50%',
    '&:hover': {
      background: '#3f51b5'
    }
  },
  formControl: {
    margin: theme.spacing(7),
  },
  formLabel: {
    fontWeight: 600,
    margin: theme.spacing(0, 0, 1, 0),
  },
  textField: {
    margin: theme.spacing(5, 0),
  }
}))


const FormStepTwo = ({
  values,
  nextStep,
  prevStep,
  onChangeValue,
}) => {

  const classes = useStyles()
  const { entry, stop, target, } = values

  const [error, setError] = useState(false)

  const next = e => {
    e.preventDefault()
    if (!entry || !stop || !target) {
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
          label="Stop"
          name="stop"
          value={stop}
          onChange={onChangeValue}
          placeholder="Stop"
        />

        <TextField
          className={classes.textField}
          error={!target && error}
          label="Target"
          name="target"
          value={target}
          onChange={onChangeValue}
          placeholder="Target"
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

export default FormStepTwo