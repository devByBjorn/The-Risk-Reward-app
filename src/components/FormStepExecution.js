import React, { Fragment, useState } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Button from '@material-ui/core/Button'
import FormPageContainer from '../components_style/FormPageContainerStyled'
import FormContainer from '../components_style/FormContainerStyled'
import formElementsStyled from '../components_style/formElementsStyled'

const FormStepExecution = ({ values, nextStep, prevStep, onConclusionChange }) => {
  const { execution, whyExecution, improveExecution } = values
  const classes = formElementsStyled()
  const [error, setError] = useState(false)
  const [helperTextWhy, setHelperTextWhy] = useState(' ')
  const [helperTextImprove, setHelperTextImprove] = useState(' ')

  //Create function for error message and set validation length on text area
  const next = e => {
    e.preventDefault()
    if (!execution) {
      setError(true)
    } else if (!whyExecution) {
      setHelperTextWhy('This is you chance to really find your edge. There is no need to rush through this, what you need to do is to really think about why you acted like you did and write it down.')
    } else if (whyExecution.length < 10) {
      setHelperTextWhy('Come on! Do it properly.')
    } else if (!improveExecution) {
      setHelperTextImprove('If you want to improve you need to write down your thoughts and ideas about how to improve. Otherwise you will go around in circles, never improve, and in the end you will not make it in this business.')
    } else if (improveExecution.length < 10) {
      setHelperTextImprove('Come on! Do it properly.')
    } else {
      setError(false)
      setHelperTextImprove(' ')
      setHelperTextWhy(' ')
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
          error={!execution && error}
          className={classes.formControl}>
          <FormLabel
            className={classes.formLabel}
            component="legend">Execution</FormLabel>
          <RadioGroup aria-label="execution" name="execution">
            <FormControlLabel
              value="good"
              control={<Radio />}
              label="good"
              checked={execution === 'good' ? true : false}
              onChange={onConclusionChange}
            />
            <FormControlLabel
              value="poor"
              control={<Radio />}
              label="poor"
              checked={execution === 'poor' ? true : false}
              onChange={onConclusionChange}
            />
            <FormControlLabel
              value="both"
              control={<Radio />}
              label="both"
              checked={execution === 'both' ? true : false}
              onChange={onConclusionChange}
            />
          </RadioGroup>
        </FormControl>

        {execution &&
          <Fragment>
            <FormLabel
              className={classes.formLabel}
              component="legend">Develop</FormLabel>
            <TextareaAutosize
              type="textarea"
              className={classes.textArea}
              aria-label="minimum height"
              rowsMin={8}
              placeholder="What made you execute in this manner?"
              name="whyExecution"
              value={whyExecution}
              onChange={onConclusionChange}
            />
            <FormHelperText
              className={classes.helperText}
              children={helperTextWhy}
            />
            <TextareaAutosize
              type="textarea"
              className={classes.textArea}
              aria-label="minimum height"
              rowsMin={8}
              placeholder="How can you improve your execution?"
              name="improveExecution"
              value={improveExecution}
              onChange={onConclusionChange}
            />
            <FormHelperText
              className={classes.helperText}
              children={helperTextImprove}
            />
          </Fragment>
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



export default FormStepExecution