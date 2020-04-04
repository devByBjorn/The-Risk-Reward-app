
import React from 'react'
import {
  CheckboxBtn,
  RadioBtn,
  TextInput,
  Textarea
} from '../inputs'

class StopEntryTarget extends React.Component {
  state = {
    errorMsg: ''
  }
  continue = e => {
    const { values } = this.props
    e.preventDefault()

    if (!values.entry || !values.stop || !values.target) {
      this.setState(() => ({ errorMsg: 'Make sure to give entry, stop and target a value' }))
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
    const { values, onChangeValue } = this.props
    return (
      <React.Fragment>
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

export default StopEntryTarget