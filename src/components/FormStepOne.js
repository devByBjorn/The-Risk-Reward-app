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
    margin: theme.spacing(3),
  },
  formLabel: {
    marginBottom: '1rem',
  }
}))


const MarketAndDirection = ({
  values,
  nextStep,
  onChangeValue,
  onChangeByInput
}) => {
  const { market, direction, setup, entry, stop, target, status } = values
  const classes = useStyles()
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

  return (
    <FormPageContainer>
      <FormContainer>
        <TextField
          className={classes.inline}
          error={!market && error}
          label="Market"
          name='market'
          value={market}
          onChange={onChangeByInput}
          placeholder="Market"
        />

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
            onClick={next}
          >Next</Button>
        </div>
      </FormContainer>
    </FormPageContainer>
  )
}

export default MarketAndDirection