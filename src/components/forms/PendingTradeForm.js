import React from 'react'
import {
  CheckboxBtn,
  RadioBtn,
  TextInput,
  Textarea
} from './inputs'

class PendingTradeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      direction: props.trade ? props.trade.direction : '',
      market: props.trade ? props.trade.market : '',
      entry: props.trade ? props.trade.entry : '',
      stop: props.trade ? props.trade.stop : '',
      target: props.trade ? props.trade.target : '',
      status: props.trade ? props.trade.status : '',
    }
  }

  onClickDirection = (e) => {
    const direction = e.target.value
    this.setState(() => ({ direction }))
  }

  onChangeMarket = (e) => {
    const market = e.target.value
    this.setState(() => ({ market }))
  }

  onChangeValue = (e) => {
    const value = e.target.value
    const name = e.target.name

    !value || value.match(/^\d*(\.\d*)?$/)
      ? this.setState(() => ({ [name]: value }))
      : ''
  }

  onClickStatus = (e) => {
    const status = e.target.value
    this.setState(() => ({ status }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (!this.state.entry || !this.state.stop || !this.state.target
      || !this.state.direction) {
      this.setState(() => ({ inputError: 'Values for direction, entry, stop, and target must be given' }))
    } else {
      this.setState(() => ({ inputError: '' }))
      this.props.handleSubmit({
        direction: this.state.direction,
        market: this.state.market.toUpperCase(),
        entry: this.state.entry,
        stop: this.state.stop,
        target: this.state.target,
        status: this.state.status,
      })
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.state.inputError && <p>{this.state.inputError}</p>}

        <label>Direction</label>

        <RadioBtn
          name="direction"
          value="long"
          checked={this.state.direction === 'long' ? true : false}
          onClick={this.onClickDirection}
        />
        <label>Long</label>

        <RadioBtn
          name="direction"
          value="short"
          checked={this.state.direction === 'short' ? true : false}
          onClick={this.onClickDirection}
        />
        <label>Short</label>
        <br />

        <label>Market/ Equity</label>
        <TextInput
          name='market'
          value={this.state.market}
          onChange={this.onChangeMarket}
        />

        <label>Entry</label>
        <TextInput
          name="entry"
          value={this.state.entry}
          onChange={this.onChangeValue}
        />

        <label>Stop</label>
        <TextInput
          name="stop"
          value={this.state.stop}
          onChange={this.onChangeValue}
        />

        <label>Target</label>
        <TextInput
          name="target"
          value={this.state.target}
          onChange={this.onChangeValue}
        /> <br />

        <button
        >Add</button>
      </form>
    )
  }
}

export default PendingTradeForm
