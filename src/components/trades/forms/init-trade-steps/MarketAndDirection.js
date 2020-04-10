import React, { useState } from 'react'
import { RadioBtn, TextInput } from '../../../utilities/inputs'
import Btn from '../../../utilities/Btn'

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
    <React.Fragment>
      <label>Market/ Equity</label>
      <br />
      <TextInput
        name='market'
        value={values.market}
        onChange={onChangeByInput}
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
    </React.Fragment>
  )
}

export default MarketAndDirection