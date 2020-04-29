import React from 'react'
import { formDate } from '../helpers/formDate'

const FormSubmitClosed = ({ values, prevStep, handleSubmit }) => {

  const { market, direction, setup, entry, stop, target, status, opened,
    closed, execution, whyExecution, improveExecution,
    management, whyManagement, improveManagement } = values

  const back = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <React.Fragment>
      <div>
        <ul>
          <li>Market: {market}</li>
          <li>Direction: {direction}</li>
          <li>Setup: {setup}</li>
          <li>Entry: {entry}</li>
          <li>Stop: {stop}</li>
          <li>Target: {target}</li>
          <li>Status: {status}</li>
          {<li>{formDate(opened)}</li>}
          {<li>{formDate(closed)}</li>}
          <li>Execution: {execution}
            <ul>
              <li>Why:{whyExecution}</li>
              <li>Improve: {improveExecution}</li>
            </ul>
          </li>
          <li>Management: {management}
            <ul>
              <li>Why: {whyManagement}</li>
              <li>Improve: {improveManagement}</li>
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