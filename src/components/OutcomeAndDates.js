import React, { useState } from 'react'
import moment from 'moment'
import { isInclusivelyBeforeDay, DateRangePicker } from 'react-dates'
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
  buttonWrapper: {
    display: 'flex',
    width: '100%',
  },
  button: {
    margin: theme.spacing(1, 1, 0, 0),
    width: '50%'
  },
  dateWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  formLabel: {
    marginBottom: '1rem',
  }
}))


const OutcomeAndDates = ({
  values,
  nextStep,
  prevStep,
  onChangeByInput,
  onDatesChange }) => {
  const classes = useStyles()
  const { outcome, opened, closed } = values

  const [error, setError] = useState(false)
  const [focused, setFocused] = useState(null)

  const next = e => {
    e.preventDefault()
    if (!outcome || !opened || !closed) {
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
        <FormControl
          component="fieldset"
          error={!outcome && error}
          className={classes.formControl}>
          <FormLabel
            className={classes.formLabel}
            component="legend">outcome</FormLabel>
          <RadioGroup aria-label="outcome" name="outcome">
            <FormControlLabel
              value="win"
              control={<Radio />}
              label="win"
              checked={outcome === 'win' ? true : false}
              onChange={onChangeByInput}
            />
            <FormControlLabel
              value="loss"
              control={<Radio />}
              label="loss"
              checked={outcome === 'loss' ? true : false}
              onChange={onChangeByInput}
            />
            <FormControlLabel
              value="scratch"
              control={<Radio />}
              label="scratch"
              checked={outcome === 'scratch' ? true : false}
              onChange={onChangeByInput}
            />
          </RadioGroup>
        </FormControl>



        <div className={classes.dateWrapper}>
          <label
            error={!opened || !closed & error}
          >Opened & Closed</label>
          <DateRangePicker
            startDate={opened}
            startDateId="startDateId"
            endDate={closed}
            endDateId="endDateId"
            onDatesChange={onDatesChange}
            focusedInput={focused}
            onFocusChange={(focused) => setFocused(focused)}
            numberOfMonths={1}
            isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
            showClearDates={true}
            minimumNights={0}
          />
        </div>


        <div className={classes.buttonWrapper}>
          <Button
            className={classes.button}
            onClick={back}
            variant="outlined"
            color="primary"
          >Back</Button>
          <Button
            className={classes.button}
            onClick={next}
            variant="outlined"
            color="primary"
          >Next</Button>
        </div>
      </FormContainer>
    </FormPageContainer>
  )
}

export default OutcomeAndDates