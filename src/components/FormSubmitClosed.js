import React from 'react'
import FormPageContainer from '../components_style/FormPageContainerStyled'
import formElementsStyled from '../components_style/formElementsStyled'
import Button from '@material-ui/core/Button'
import FormNav from './FormNav'
import OverViewClosedTrade from './OverviewClosedTrade'
import FormContainer from '../components_style/FormContainerStyled'

const FormSubmitClosed = ({ values, prevStep, handleSubmit, navigateByStepValue }) => {

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

      <FormContainer width="100rem">
        <OverViewClosedTrade
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

export default FormSubmitClosed