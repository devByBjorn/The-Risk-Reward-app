import React, { Fragment, useState } from 'react'
import DatePicker from 'react-datepicker'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import formElementsStyled from '../components_style/formElementsStyled'

const FormStepThreeClosed = ({
  values,
  onChangeByInput,
  onClosedDateChange,
  onOpenDateChange,
  error }) => {
  const classes = formElementsStyled()
  const { outcome, opened, closed } = values

  return (
    <Fragment>
      <div className={classes.dateWrapper}>
        <div className={classes.date}>
          <FormLabel
            className={classes.formLabel}
          >Opened</FormLabel>
          <DatePicker
            dateFormat="MMM d, yyyy hh:mm"
            maxDate={new Date()}
            onChange={onOpenDateChange}
            selected={opened}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
          />
        </div>
        <ArrowRightAltIcon className={classes.arrow} />
        <div className={classes.date}>
          <FormLabel
            className={classes.formLabel}
          >Closed</FormLabel>
          <DatePicker
            dateFormat="MMM d, yyyy hh:mm"
            maxDate={new Date()}
            minDate={opened}
            onChange={onClosedDateChange}
            selected={closed}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
          />
        </div>
      </div>

      <FormControl
        component="fieldset"
        error={!outcome && error}
        className={classes.formControl}>
        <FormLabel
          className={classes.formLabel}
          component="legend">Outcome</FormLabel>
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
    </Fragment>
  )
}

export default FormStepThreeClosed