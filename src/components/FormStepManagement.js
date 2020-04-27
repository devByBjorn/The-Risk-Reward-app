import React, { useState } from 'react'
import Btn from './Btn'
import { RadioBtn, Textarea } from './inputs'

const ManagementAndSubmit = ({ values, nextStep, prevStep, onConclusionChange }) => {
  const [errorMsg, setErrorMsg] = useState('')

  const next = e => {
    e.preventDefault()
    if (!values.management) {
      setErrorMsg('Make sure to chose an outcome')
    } else if (!values.whyManagement) {
      setErrorMsg('This is your chance to really improve your edge. Take it!')
    } else if (!values.improveManagement) {
      setErrorMsg('For fuck sake, don\'t be a cunt. Fill out the damn field')
    } else {
      setErrorMsg('')
      nextStep()
    }
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <React.Fragment>
      <h4>Conclusion 2/2: Management</h4>
      {errorMsg && <p>{errorMsg}</p>}
      <label>Good</label>
      <RadioBtn
        name="management"
        value="good"
        checked={values.management === 'good' ? true : false}
        onChange={onConclusionChange}
      />
      <label>Poor</label>
      <RadioBtn
        name="management"
        value="poor"
        checked={values.management === 'poor' ? true : false}
        onChange={onConclusionChange}
      />
      <label>Both</label>
      <RadioBtn
        name="management"
        value="both"
        checked={values.management === 'both' ? true : false}
        onChange={onConclusionChange}
      />

      <Textarea
        placeholder="Why?"
        name="whyManagement"
        value={values.whyManagement}
        onChange={onConclusionChange}
      />
      <Textarea
        placeholder="How to improve?"
        name="improveManagement"
        value={values.improveManagement}
        onChange={onConclusionChange}
      />
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


export default ManagementAndSubmit