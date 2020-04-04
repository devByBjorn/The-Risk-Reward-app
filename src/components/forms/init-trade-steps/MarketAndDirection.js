import React from 'react'
import {
  CheckboxBtn,
  RadioBtn,
  TextInput,
  Textarea
} from '../inputs'

class MarketAndDirection extends React.Component {
  state = {
    errorMsg: ''
  }
  continue = e => {
    const { values } = this.props
    e.preventDefault()

    if (!values.direction) {
      this.setState(() => ({ errorMsg: 'Make sure to chose a direction of trade' }))
    } else {
      this.setState(() => ({ errorMsg: '' }))
      this.props.nextStep()
    }
  }
  render() {
    const { values, onClickDirection, onChangeMarket } = this.props
    return (
      <React.Fragment>
        <label>Market/ Equity</label>
        <br />
        <TextInput
          name='market'
          value={values.market}
          onChange={onChangeMarket}
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
        <br />

        { /*    {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
        <button
          onClick={this.continue}
    >Continue</button> */}
      </React.Fragment>
    )
  }
}

export default MarketAndDirection