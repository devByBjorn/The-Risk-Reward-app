import React, { useState } from 'react'
import Btn from './Btn'
import { TextareaAutosize } from '@material-ui/core'

import {
  RadioBtn,
} from './inputs'

const ClosedTradeForm = ({ values, nextStep, prevStep, onConclusionChange }) => {
  const [errorMsg, setErrorMsg] = useState('')

  //Create function for error message and set validation length on text area
  const next = e => {
    e.preventDefault()
    if (!values.execution) {
      setErrorMsg('Make sure to rate your execution')
    } else if (!values.whyExecution) {
      setErrorMsg('This is your chance to really improve your edge. Take it!')
    } else if (!values.improveExecution) {
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
      <h4>Conclusion 1/2: Execution</h4>
      <label>Good</label>
      <RadioBtn
        name="execution"
        value="good"
        checked={values.execution === 'good' ? true : false}
        onChange={onConclusionChange}
      />
      <label>Poor</label>
      <RadioBtn
        name="execution"
        value="poor"
        checked={values.execution === 'poor' ? true : false}
        onChange={onConclusionChange}
      />
      <label>Both</label>
      <RadioBtn
        name="execution"
        value="both"
        checked={values.execution === 'both' ? true : false}
        onChange={onConclusionChange}
      />
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={8}
        placeholder="Why?"
        name="whyExecution"
        value={values.whyExecution}
        onChange={onConclusionChange}
      />
      <TextareaAutosize
        aria-label="minimum height"
        rowsMin={8}
        placeholder="How to improve?"
        name="improveExecution"
        value={values.improveExecution}
        onChange={onConclusionChange}
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

// class ClosedTradeForm extends React.Component {
//   continue = e => {
//     e.preventDefault()
//     this.props.nextStep()
//   }
//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };
//   render() {
//     const { values, onConclusionChange } = this.props

//     return (
//       <React.Fragment>
//         <h4>Conclusion 1/2: Execution</h4>
//         <label>Good</label>
//         <RadioBtn
//           name="execution"
//           value="good"
//           checked={values.execution === 'good' ? true : false}
//           onClick={onConclusionChange}
//         />
//         <label>Poor</label>
//         <RadioBtn
//           name="execution"
//           value="poor"
//           checked={values.execution === 'poor' ? true : false}
//           onClick={onConclusionChange}
//         />
//         <label>Both</label>
//         <RadioBtn
//           name="execution"
//           value="both"
//           checked={values.execution === 'both' ? true : false}
//           onClick={onConclusionChange}
//         />
//         <Textarea
//           placeholder="Why?"
//           name="whyExecution"
//           value={values.whyExecution}
//           onChange={onConclusionChange}
//         />
//         <Textarea
//           placeholder="How to improve?"
//           name="improveExecution"
//           value={values.improveExecution}
//           onChange={onConclusionChange}
//         />
//         <Btn
//           text="Back"
//           onClick={this.back}
//         />
//         <Btn
//           text="Next"
//           onClick={this.continue}
//         />
//       </React.Fragment>
//     )
//   }
// }

export default ClosedTradeForm