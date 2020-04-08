import React, { useState } from 'react'
import { RadioBtn, TextInput } from '../../../utilities/inputs'
import Btn from '../../../utilities/Btn'

const MarketAndDirection = ({ values, nextStep, onClickDirection, onChangeByInput }) => {
  const [errorMsg, setErrorMessage] = useState('')

  const next = e => {
    e.preventDefault()
    if (!values.direction) {
      setErrorMessage('Make sure to chose a direction of trade')
    } else {
      setErrorMessage('')
      nextStep()
    }
  }
  return (
    <React.Fragment>
      <label>Market/ Equity</label>
      <br />
      <TextInput
        name='market'
        value={values.market}
        onChange={onChangeByInput}
      />
      <br />
      <label>Direction</label>
      <br />
      <RadioBtn
        name="direction"
        value="long"
        checked={values.direction === 'long' ? true : false}
        onClick={onClickDirection}
      />
      <label>Long</label>

      <RadioBtn
        name="direction"
        value="short"
        checked={values.direction === 'short' ? true : false}
        onClick={onClickDirection}
      />
      <label>Short</label>
      <div className="trade-form-error-message">
        {errorMsg && <p>{errorMsg}</p>}
      </div>
      <Btn
        text="Next"
        onClick={next}
      />
      <br />
    </React.Fragment>
  )
}

// class MarketAndDirection extends React.Component {
//   state = {
//     errorMsg: ''
//   }
//   continue = e => {
//     const { values } = this.props
//     e.preventDefault()

//     if (!values.direction) {
//       this.setState(() => ({ errorMsg: 'Make sure to chose a direction of trade' }))
//     } else {
//       this.setState(() => ({ errorMsg: '' }))
//       this.props.nextStep()
//     }
//   }
//   render() {
//     const { values, onClickDirection, onChangeMarket } = this.props
//     return (
//       <React.Fragment>
//         <label>Market/ Equity</label>
//         <br />
//         <TextInput
//           name='market'
//           value={values.market}
//           onChange={onChangeMarket}
//         />
//         <br />
//         <label>Direction</label>
//         <br />
//         <RadioBtn
//           name="direction"
//           value="long"
//           checked={values.direction === 'long' ? true : false}
//           onClick={onClickDirection}
//         />
//         <label>Long</label>

//         <RadioBtn
//           name="direction"
//           value="short"
//           checked={values.direction === 'short' ? true : false}
//           onClick={onClickDirection}
//         />
//         <label>Short</label>
//         <div className="trade-form-error-message">
//           {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
//         </div>
//         <Btn
//           text="Next"
//           onClick={this.continue}
//         />
//         <br />
//       </React.Fragment>
//     )
//   }
// }

export default MarketAndDirection