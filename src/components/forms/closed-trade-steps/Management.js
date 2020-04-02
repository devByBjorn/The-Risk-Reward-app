import React from 'react'

import {
  CheckboxBtn,
  RadioBtn,
  Textarea
} from './inputs'

class ClosedTradeForm extends React.Component {
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, onConclusionChange, handleSubmit } = this.props

    return (
      <React.Fragment>
        <h4>Conclusion 2/2: Management</h4>
        <label>Good</label>
        <RadioBtn
          name="management"
          value="good"
          checked={values.management === 'good' ? true : false}
          onClick={onConclusionChange}
        />
        <label>Poor</label>
        <RadioBtn
          name="management"
          value="poor"
          checked={values.management === 'poor' ? true : false}
          onClick={onConclusionChange}
        />
        <label>Both</label>
        <RadioBtn
          name="management"
          value="both"
          checked={values.management === 'both' ? true : false}
          onClick={onConclusionChange}
        />

        <Textarea
          placeholder="Why?"
          name="whyNote"
          value={values.whyNote}
          onChange={onConclusionChange}
        />
        <Textarea
          placeholder="How to improve?"
          name="improveNote"
          value={values.improveNote}
          onChange={onConclusionChange}
        />
        <button
          onClick={handleSubmit}
        >continue</button>
      </React.Fragment>
    )
  }
}

export default ClosedTradeForm