import React from 'react'

const FormSubmitPending = ({ values, prevStep, handleSubmit }) => {
  const back = e => {
    e.preventDefault()
    prevStep()
  }
  return (
    <React.Fragment>
      <div className="history">
        <ul>
          <li>Market: {values.market}</li>
          <li>Direction: {values.direction}</li>
          <li>Setup: {values.setup}</li>
          <li>Entry: {values.entry}</li>
          <li>Stop: {values.stop}</li>
          <li>Target: {values.target}</li>
          <li>Status: {values.status}</li>
        </ul>
      </div>
      <button
        onClick={back}
      >Back</button>
      <button
        onClick={handleSubmit}
      >Add</button>
    </React.Fragment>
  )
}

export default FormSubmitPending