
import React, { useState } from 'react'
import { TextInput } from '../../../utilities/inputs'
import Btn from '../../../utilities/Btn'

const StopEntryTarget = ({ values, nextStep, prevStep, onChangeValue, onChangeByInput }) => {
  const [errorMsg, setErrorMessage] = useState('')

  const next = e => {
    e.preventDefault()
    if (!values.entry || !values.stop || !values.target) {
      setErrorMessage('Make sure to give entry, stop and target a value')
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
      <label>Setup</label>
      <TextInput
        name="setup"
        value={values.setup}
        onChange={onChangeByInput}
      />
      <br />
      <label>Entry</label>
      <TextInput
        name="entry"
        value={values.entry}
        onChange={onChangeValue}
      />

      <label>Stop</label>
      <TextInput
        name="stop"
        value={values.stop}
        onChange={onChangeValue}
      />

      <label>Target</label>
      <TextInput
        name="target"
        value={values.target}
        onChange={onChangeValue}
      />
      <br />
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

// class StopEntryTarget extends React.Component {
//   state = {
//     errorMsg: ''
//   }
//   continue = e => {
//     const { values } = this.props
//     e.preventDefault()

//     if (!values.entry || !values.stop || !values.target) {
//       this.setState(() => ({ errorMsg: 'Make sure to give entry, stop and target a value' }))
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
//     const { values, onChangeValue } = this.props
//     return (
//       <React.Fragment>
//         <label>Entry</label>
//         <TextInput
//           name="entry"
//           value={values.entry}
//           onChange={onChangeValue}
//         />

//         <label>Stop</label>
//         <TextInput
//           name="stop"
//           value={values.stop}
//           onChange={onChangeValue}
//         />

//         <label>Target</label>
//         <TextInput
//           name="target"
//           value={values.target}
//           onChange={onChangeValue}
//         />
//         <br />
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

export default StopEntryTarget