import React from 'react'
import Btn from '../../../utilities/Btn'
import { RadioBtn, Textarea } from '../../../utilities/inputs'

const ManagementAndSubmit = ({ values, nextStep, prevStep, onConclusionChange }) => {
  const next = e => {
    e.preventDefault()
    nextStep()
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }

  return (
    <React.Fragment>
      <h4>Conclusion 2/2: Management</h4>
      <label>Good</label>
      <RadioBtn
        name="management"
        value="good"
        checked={values.management === 'good' ? true : false}
        onClick={onConclusionChange}
      />
      <label>Poor</label>
      <RadioBtn
        name="management"
        value="poor"
        checked={values.management === 'poor' ? true : false}
        onClick={onConclusionChange}
      />
      <label>Both</label>
      <RadioBtn
        name="management"
        value="both"
        checked={values.management === 'both' ? true : false}
        onClick={onConclusionChange}
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

// class ManagementAndSubmit extends React.Component {
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
//         <h4>Conclusion 2/2: Management</h4>
//         <label>Good</label>
//         <RadioBtn
//           name="management"
//           value="good"
//           checked={values.management === 'good' ? true : false}
//           onClick={onConclusionChange}
//         />
//         <label>Poor</label>
//         <RadioBtn
//           name="management"
//           value="poor"
//           checked={values.management === 'poor' ? true : false}
//           onClick={onConclusionChange}
//         />
//         <label>Both</label>
//         <RadioBtn
//           name="management"
//           value="both"
//           checked={values.management === 'both' ? true : false}
//           onClick={onConclusionChange}
//         />

//         <Textarea
//           placeholder="Why?"
//           name="whyManagement"
//           value={values.whyManagement}
//           onChange={onConclusionChange}
//         />
//         <Textarea
//           placeholder="How to improve?"
//           name="improveManagement"
//           value={values.improveManagement}
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

export default ManagementAndSubmit