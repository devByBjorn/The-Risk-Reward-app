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
    width: '100%',
  },
  button: {
    background: '#f50057',
    color: '#fff',
    margin: theme.spacing(1, 1, 0, 0),
    width: '50%'
  },
  formControl: {
    margin: theme.spacing(3),
  },
  formLabel: {
    marginBottom: '1rem',
  }
}))

const StopEntryTarget = ({
  values,
  nextStep,
  prevStep,
  onChangeValue,
  onChangeByInput
}) => {

  const classes = useStyles()
  const { entry, stop, target, status } = values

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
          error={!entry && error}
          label="Entry"
          name="entry"
          value={entry}
          onChange={onChangeValue}
          placeholder="Entry"
        />

        <TextField
          error={!stop && error}
          label="Stop"
          name="stop"
          value={stop}
          onChange={onChangeValue}
          placeholder="Stop"
        />

        <TextField
          error={!target && error}
          label="Target"
          name="target"
          value={target}
          onChange={onChangeValue}
          placeholder="Target"
        />

        {/*<FormControl
          component="fieldset"
          error={!status && error}
          className={classes.formControl}>
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
        </FormControl>*/}

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

// class StopEntryTarget extends React.Component {
//   state = {
//     errorMsg: ''
//   }
//   continue = e => {
//     const { values } = this.props
//     e.preventDefault()

//     if (!values.entry || !values.stop || !values.target) {
//       this.setState(() => ({ errorMsg: 'Make sure to give entry, stop and target a value' }))
//     } else {
//       this.setState(() => ({ errorMsg: '' }))
//       this.props.nextStep()
//     }
//   }
//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };
//   render() {
//     const { values, onChangeValue } = this.props
//     return (
//       <React.Fragment>
//         <label>Entry</label>
//         <TextInput
//           name="entry"
//           value={values.entry}
//           onChange={onChangeValue}
//         />

//         <label>Stop</label>
//         <TextInput
//           name="stop"
//           value={values.stop}
//           onChange={onChangeValue}
//         />

//         <label>Target</label>
//         <TextInput
//           name="target"
//           value={values.target}
//           onChange={onChangeValue}
//         />
//       
//         {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
//         <Btn
//           text="Back"
//           onClick={this.back}
//         />
//         <Btn
//           text="Next"
//           onClick={this.continue}
//         />
//       </React.Fragment>
//     )
//   }
// }

export default StopEntryTarget