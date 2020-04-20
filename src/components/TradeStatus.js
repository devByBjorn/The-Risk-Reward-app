
import React, { useState } from 'react'
import { RadioBtn } from './inputs'
import Btn from './Btn'

const TradeStatus = ({ values, nextStep, prevStep, onChangeByInput }) => {
  const [errorMsg, setErrorMessage] = useState('')

  const next = e => {
    e.preventDefault()
    if (!values.status) {
      setErrorMessage('Make sure to chose status of trade')
    } else {
      setErrorMessage('')
      nextStep()
    }
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <React.Fragment>
      <label>Status</label>
      <br />
      <label>Closed</label>
      <RadioBtn
        name="status"
        value="closed"
        checked={values.status === 'closed' ? true : false}
        onChange={onChangeByInput}
      />
      <label>Active</label>
      <RadioBtn
        name="status"
        value="active"
        checked={values.status === 'active' ? true : false}
        onChange={onChangeByInput}
      />
      <label>Pending</label>
      <RadioBtn
        name="status"
        value="pending"
        checked={values.status === 'pending' ? true : false}
        onChange={onChangeByInput}
      />
      {errorMsg && <p>{errorMsg}</p>}
      <Btn
        text="Back"
        onClick={back}
      />
      <Btn
        text="Next"
        onClick={next}
      />
    </React.Fragment>
  )
}

export default TradeStatus