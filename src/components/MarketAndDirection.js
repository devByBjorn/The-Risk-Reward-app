import React, { useState } from 'react'
import { RadioBtn, TextInput } from './inputs'
import Btn from './Btn'
import { FormTextField } from './styles/styledInputs'

const MarketAndDirection = ({ values, nextStep, onChangeByInput }) => {
  const [errorMsg, setErrorMessage] = useState('')

  const next = e => {
    e.preventDefault()
    if (!values.direction) {
      setErrorMessage('Make sure to chose a direction of trade')
    } else {
      setErrorMessage('')
      nextStep()
    }
  }

  return (
    <div>
      <FormTextField
        name='market'
        value={values.market}
        onChange={onChangeByInput}
        placeholder="Market"
      />
      <br />
      <label>Direction</label>
      <br />
      <RadioBtn
        name="direction"
        value="long"
        checked={values.direction === 'long' ? true : false}
        onChange={onChangeByInput}
      />
      <label>Long</label>

      <RadioBtn
        name="direction"
        value="short"
        checked={values.direction === 'short' ? true : false}
        onChange={onChangeByInput}
      />
      <label>Short</label>
      <div className="trade-form-error-message">
        {errorMsg && <p>{errorMsg}</p>}
      </div>
      <Btn
        text="Next"
        onClick={next}
      />
      <br />
    </div >
  )
}

export default MarketAndDirection