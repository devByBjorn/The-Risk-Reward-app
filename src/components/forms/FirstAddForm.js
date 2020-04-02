import React from 'react'
import {
  CheckboxBtn,
  RadioBtn,
  TextInput,
  Textarea
} from './inputs'

class FirstAddForm extends React.Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  render() {
    const { values, onClickDirection, onChangeMarket, onChangeValue, onClickStatus } = this.props
    return (
      <React.Fragment>
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

        <label>Market/ Equity</label>
        <TextInput
          name='market'
          value={values.market}
          onChange={onChangeMarket}
        />

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
        <br />
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
          onClick={this.continue}
        >Continue</button>
      </React.Fragment>
    )
  }
}

export default FirstAddForm