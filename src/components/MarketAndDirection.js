import React, { useState } from 'react'
import { RadioBtn, TextInput } from './inputs'
import Btn from './Btn'
import { FormTextField } from './styles/styledInputs'
import FormPageContainer from '../components_style/FormPageContainerStyled'
import FormContainer from '../components_style/FormContainerStyled'
import FormLabelAndInputPair from './FormLabelAndInputPair'
const MarketAndDirection = ({ values, nextStep, onChangeByInput }) => {
  const [errorMsg, setErrorMessage] = useState('')

  const next = e => {
    e.preventDefault()
    if (!values.direction) {
      setErrorMessage('Make sure to chose direction')
    } else {
      setErrorMessage('')
      nextStep()
    }
  }

  return (
    <FormPageContainer>
      <FormContainer>
        <FormTextField
          name='market'
          value={values.market}
          onChange={onChangeByInput}
          placeholder="Market"
        />
        <label>Direction</label>

        <FormLabelAndInputPair
          label="Long"
          name="direction"
          value="long"
          type="radio"
          checked={values.direction === 'long' ? true : false}
          onChange={onChangeByInput}
        />
        <FormLabelAndInputPair
          label="Short"
          name="direction"
          value="short"
          type="radio"
          checked={values.direction === 'short' ? true : false}
          onChange={onChangeByInput}
        />

        <div className="trade-form-error-message">
          {errorMsg && <p>{errorMsg}</p>}
        </div>
        <Btn
          text="Next"
          onClick={next}
        />
      </FormContainer>
    </FormPageContainer>
  )
}

export default MarketAndDirection