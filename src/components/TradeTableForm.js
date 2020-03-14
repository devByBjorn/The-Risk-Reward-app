import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { questionIcon } from '../icons/icons'

class TradeTableForm extends React.Component {
  state = {
    direction: '',
    market: '',
    entry: '',
    stop: '',
    target: '',
    outcome: '',
  }

  onClickDirection = (e) => {
    if (e.target.value === 'long') {
      this.setState(() => ({ direction: 'long' }))
    } else {
      this.setState(() => ({ direction: 'short' }))
    }
  }

  onChangeMarket = (e) => {
    const market = e.target.value
    this.setState(() => ({ market }))
  }

  onChangeValue = (e) => {
    const value = e.target.value
    const name = e.target.name

    if (name === 'entry'
      || name === 'stop'
      || name === 'target'
    ) {
      value.match(/^\d*(\.\d*)?$/)
        ? this.setState(() => ({ [name]: value }))
        : ''
    }
  }
  onClickOutcome = (e) => {
    if (e.target.value === 'win') {
      this.setState(() => ({ outcome: 'win' }))
    } else {
      this.setState(() => ({ outcome: 'loss' }))
    }
  }
  render() {
    return (
      <form>
        <input
          type="radio"
          name="direction"
          value="long"
          onClick={this.onClickDirection}
        />
        <label>Long</label>
        <input
          type="radio"
          name="direction"
          value="short"
          onClick={this.onClickDirection}
        />
        <label>Short</label>
        <br />
        <label>Market</label>
        <input
          type="text"
          value={this.state.market}
          onChange={this.onChangeMarket}
        />
        <label>Entry</label>
        <input
          type="text"
          name="entry"
          value={this.state.entry}
          onChange={this.onChangeValue}
        />
        <label>Stop</label>
        <input
          type="text"
          name="stop"
          value={this.state.stop}
          onChange={this.onChangeValue}
        />
        <label>Target</label>
        <input
          type="text"
          name="target"
          value={this.state.target}
          onChange={this.onChangeValue}
        /> <br />
        <input
          type="radio"
          name="outcome"
          value="winner"
          onClick={this.onClickOutcome}
        />
        <label>Win</label>
        <input
          type="radio"
          name="outcome"
          value="loser"
          onClick={this.onClickOutcome}
        />
        <label>Loss</label>
        <br />
        <div>
          <textarea
            placeholder="Trade thoughts"
            type="text"
            value={this.state.note}
            onChange={this.onChangeNote}
          />
          <button><FontAwesomeIcon icon={questionIcon} /></button>
        </div>
        <button>Add</button>
      </form>
    )
  }
}

export default TradeTableForm