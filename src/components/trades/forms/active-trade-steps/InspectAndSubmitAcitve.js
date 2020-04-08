import React from 'react'
import moment from 'moment'
import { Btn, SubmitBtn } from '../../../utilities/Btn'

const InspectAndSubmitActive = ({ values, prevStep, handleSubmit }) => {
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
          <li>Status:{moment(values.opened).format('MM/DD/YY')}</li>
        </ul>
      </div>
      <Btn
        text="Back"
        onClick={back}
      />
      <button
        onClick={handleSubmit}
      >Add</button>
    </React.Fragment>
  )

}

// class InspectAndSubmitActive extends React.Component {
//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };
//   render() {
//     const { values, handleSubmit } = this.props
//     return (
//       <React.Fragment>
//         <div className="history">
//           <ul>
//             <li>Market: {values.market}</li>
//             <li>Direction: {values.direction}</li>
//             <li>Entry: {values.entry}</li>
//             <li>Stop: {values.stop}</li>
//             <li>Target: {values.target}</li>
//             <li>Status: {values.status}</li>
//             <li>Status:{moment(values.opened).format('MM/DD/YY')}</li>
//           </ul>
//         </div>
//         <Btn
//           text="Back"
//           onClick={this.back}
//         />
//         <button
//           onClick={handleSubmit}
//         >Add</button>
//       </React.Fragment>
//     )
//   }
// }

export default InspectAndSubmitActive