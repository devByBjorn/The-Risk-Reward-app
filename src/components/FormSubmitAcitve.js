import React from 'react'
import { formDate } from '../helpers/formDate'

const FormSubmitActive = ({ values, prevStep, handleSubmit }) => {

  const { market, direction, setup, entry, stop, target, status, opened } = values

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

export default FormSubmitActive