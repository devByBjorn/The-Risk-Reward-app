import React, { Fragment, useState } from 'react'
import DateTimePicker from 'react-datetime-picker'
import DatePicker from 'react-datepicker'
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


const FormStepThreeClosed = ({
  values,
  nextStep,
  prevStep,
  onChangeByInput,
  onDatesChange,
  onClosedDateChange,
  onOpenDateChange }) => {
  const classes = useStyles()
  const { outcome, opened, closed } = values

  const [error, setError] = useState(false)
  const [focused, setFocused] = useState(null)

  // const next = e => {
  //   e.preventDefault()
  //   if (!outcome || !opened || !closed) {
  //     setError(true)
  //   } else {
  //     setError(false)
  //     nextStep()
  //   }
  // }

  // const back = e => {
  //   e.preventDefault()
  //   prevStep()
  // }

  return (
    <Fragment>

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
          error={!opened && error}
        >Opened</label>

        <DatePicker
          dateFormat="MMM d, yyyy hh:mm"
          maxDate={new Date()}
          onChange={onOpenDateChange}
          selected={opened}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
        />

        <label
          error={!closed && error}
        >Closed</label>
        <DatePicker
          dateFormat="MMM d, yyyy hh:mm"
          maxDate={new Date()}
          minDate={opened}
          onChange={onClosedDateChange}
          selected={closed}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={1}
        />
      </div>


      {/* <div className={classes.buttonWrapper}>
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
  </div>*/}

    </Fragment>
  )
}

export default FormStepThreeClosed