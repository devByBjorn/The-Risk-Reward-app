import React, { Fragment, useState } from 'react'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
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
//import FormNavTwo from './FormNavTwo'

const FormStepManagement = ({
  values,
  navigateByStepValue,
  nextStep,
  prevStep,
  onConclusionChange }) => {
  const { management, whyManagement, improveManagement } = values
  const classes = formElementsStyled()

  const [helperTextWhy, setHelperTextWhy] = useState(' ')
  const [helperTextImprove, setHelperTextImprove] = useState(' ')
  const [error, setError] = useState(false)

  const next = e => {
    e.preventDefault()
    if (!management) {
      setError(true)
    } else if (!whyManagement) {
      setHelperTextWhy('This is you chance to really find your edge. There is no need to rush through this, what you need to do is to really think about why you acted like you did and write it down.')
    } else if (whyManagement.length < 20) {
      setHelperTextWhy('Come on! Do it properly.')
    } else if (!improveManagement) {
      setHelperTextImprove('If you want to improve you need to write down your thoughts and ideas about how to improve. Otherwise you will go around in circles, never improve, and in the end you will not make it in this business.')
    } else if (improveManagement.length < 20) {
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
      <FormNav
        values={values}
        navigateByStepValue={navigateByStepValue}
      />
      <FormContainer>
        <FormControl
          component="fieldset"
          error={!management ? error : undefined}
          className={classes.formControl}>
          <FormLabel
            className={classes.formLabel}
            component="legend">Management</FormLabel>
          <RadioGroup aria-label="management" name="management">
            <FormControlLabel
              value="good"
              control={<Radio />}
              label="good"
              checked={management === 'good' ? true : false}
              onChange={onConclusionChange}
            />
            <FormControlLabel
              value="poor"
              control={<Radio />}
              label="poor"
              checked={management === 'poor' ? true : false}
              onChange={onConclusionChange}
            />
            <FormControlLabel
              value="mixed"
              control={<Radio />}
              label="mixed"
              checked={management === 'mixed' ? true : false}
              onChange={onConclusionChange}
            />
          </RadioGroup>
        </FormControl>

        {management &&
          <Fragment>
            <FormLabel
              className={classes.formLabel}
              component="legend">Develop</FormLabel>
            <TextareaAutosize
              className={classes.textArea}
              error={!whyManagement ? error : undefined}
              aria-label="minimum height"
              rowsMin={8}
              placeholder="What made you manage your trade in this manner?"
              name="whyManagement"
              value={whyManagement}
              onChange={onConclusionChange}
            />
            <FormHelperText
              className={classes.helperText}
              children={helperTextWhy}
            />
            <TextareaAutosize
              className={classes.textArea}
              error={!improveManagement ? error : undefined}
              aria-label="minimum height"
              rowsMin={8}
              placeholder="How can you improve your trade management?"
              name="improveManagement"
              value={improveManagement}
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



export default FormStepManagement