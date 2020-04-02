
import React from 'react'
import {
  CheckboxBtn,
  RadioBtn,
  TextInput,
  Textarea
} from '../inputs'

class TradeStatus extends React.Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, onClickStatus } = this.props
    return (
      <React.Fragment>
        <div className="history">
          <ul>
            <li>Market: {values.market}</li>
            <li>Direction: {values.direction}</li>
            <li>Entry: {values.entry}</li>
            <li>Stop: {values.stop}</li>
            <li>Target: {values.target}</li>
          </ul>
        </div>
        <label>Status</label>
        <br />
        <label>Closed</label>
        <RadioBtn
          name="status"
          value="closed"
          onClick={onClickStatus}
        />
        <label>Active</label>
        <RadioBtn
          name="status"
          value="active"
          onClick={onClickStatus}
        />
        <label>Pending</label>
        <RadioBtn
          name="status"
          value="pending"
          onClick={onClickStatus}
        />
        {values.inputError && <p>{values.inputError}</p>}
        <button
          onClick={this.back}
        >Back</button>
        <button
          onClick={this.continue}
        >Continue</button>
      </React.Fragment>
    )
  }
}

export default TradeStatus