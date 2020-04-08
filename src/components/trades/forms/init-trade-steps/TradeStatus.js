
import React, { useState } from 'react'
import { RadioBtn } from '../../../utilities/inputs'
import Btn from '../../../utilities/Btn'

const TradeStatus = ({ values, nextStep, prevStep, onClickStatus }) => {
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
        onClick={onClickStatus}
      />
      <label>Active</label>
      <RadioBtn
        name="status"
        value="active"
        checked={values.status === 'active' ? true : false}
        onClick={onClickStatus}
      />
      <label>Pending</label>
      <RadioBtn
        name="status"
        value="pending"
        checked={values.status === 'pending' ? true : false}
        onClick={onClickStatus}
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

// class TradeStatus extends React.Component {
//   state = {
//     errorMsg: ''
//   }
//   continue = e => {
//     const { values } = this.props
//     e.preventDefault()

//     if (!values.status) {
//       this.setState(() => ({ errorMsg: 'Make sure to chose status of trade' }))
//     } else {
//       this.setState(() => ({ errorMsg: '' }))
//       this.props.nextStep()
//     }
//   }
//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };
//   render() {
//     const { values, onClickStatus, handleSubmit } = this.props
//     return (
//       <React.Fragment>
//         <label>Status</label>
//         <br />
//         <label>Closed</label>
//         <RadioBtn
//           name="status"
//           value="closed"
//           checked={values.status === 'closed' ? true : false}
//           onClick={onClickStatus}
//         />
//         <label>Active</label>
//         <RadioBtn
//           name="status"
//           value="active"
//           checked={values.status === 'active' ? true : false}
//           onClick={onClickStatus}
//         />
//         <label>Pending</label>
//         <RadioBtn
//           name="status"
//           value="pending"
//           checked={values.status === 'pending' ? true : false}
//           onClick={onClickStatus}
//         />
//         {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
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

export default TradeStatus