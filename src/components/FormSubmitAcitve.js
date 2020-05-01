import React from 'react'
import FormPageContainer from '../components_style/FormPageContainerStyled'
import FormContainer from '../components_style/FormContainerStyled'
import Button from '@material-ui/core/Button'
import FormNav from './FormNav'
import OverviewActiveTrade from './OverviewActiveTrade'
import formElementsStyled from '../components_style/formElementsStyled'

const FormSubmitActive = ({ values, prevStep, handleSubmit, navigateByStepValue }) => {

  const classes = formElementsStyled()

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

      <FormContainer padding="8rem 0" width="70rem">
        <OverviewActiveTrade
          values={values}
        />
        <div className={classes.buttonContainer}>
          <Button className={classes.button}
            onClick={back}
          >Back</Button>

          <Button className={classes.button}
            onClick={handleSubmit}
          >Add</Button>
        </div>
      </FormContainer>
    </FormPageContainer>
  )
}

export default FormSubmitActive