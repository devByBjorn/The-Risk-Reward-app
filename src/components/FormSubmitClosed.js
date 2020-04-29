import React from 'react'

const FormSubmitClosed = ({ values, prevStep, handleSubmit }) => {
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
          <li>Opened:{new Date(values.opened)}</li>
          <li>Closed:{new Date(values.closed)}</li>
          <li>Execution: {values.execution}
            <ul>
              <li>Why:{values.whyExecution}</li>
              <li>Improve: {values.improveExecution}</li>
            </ul>
          </li>
          <li>Management: {values.management}
            <ul>
              <li>Why: {values.whyManagement}</li>
              <li>Improve: {values.improveManagement}</li>
            </ul>
          </li>
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

export default FormSubmitClosed