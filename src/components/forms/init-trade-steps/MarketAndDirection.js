import React from 'react'
import {
  CheckboxBtn,
  RadioBtn,
  TextInput,
  Textarea
} from '../inputs'

class MarketAndDirection extends React.Component {
  state = {
    error: ''
  }
  continue = e => {
    e.preventDefault()
    this.setState(() => ({ error: '' }))
    this.props.nextStep()
  }

  // solve error message if values are missing

  // if (!this.props.market || !this.props.direction) {
  //   this.setState(() => ({ error: 'fill out both fields' }))
  // } else {
  //   this.setState(() => ({ error: '' }))
  //   this.props.nextStep()
  // }
  //}
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
        <br />

        {this.state.er && <p>{this.state.er}</p>}
        <button
          onClick={this.continue}
        >Continue</button>
      </React.Fragment>
    )
  }
}

export default MarketAndDirection