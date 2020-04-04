
import React from 'react'
import {
  CheckboxBtn,
  RadioBtn,
  TextInput,
  Textarea
} from '../inputs'

class TradeStatus extends React.Component {
  state = {
    errorMsg: ''
  }
  continue = e => {
    const { values } = this.props
    e.preventDefault()

    if (!values.status) {
      this.setState(() => ({ errorMsg: 'Make sure to chose status of trade' }))
    } else {
      this.setState(() => ({ errorMsg: '' }))
      this.props.nextStep()
    }
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, onClickStatus, handleSubmit } = this.props
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
        {this.state.errorMsg && <p>{this.state.errorMsg}</p>}
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