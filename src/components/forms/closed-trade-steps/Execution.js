import React from 'react'

import {
  CheckboxBtn,
  RadioBtn,
  Textarea
} from '../../utilities/inputs'

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
    const { values, onConclusionChange } = this.props

    return (
      <React.Fragment>
        <h4>Conclusion 1/2: Execution</h4>
        <label>Good</label>
        <RadioBtn
          name="execution"
          value="good"
          checked={values.execution === 'good' ? true : false}
          onClick={onConclusionChange}
        />
        <label>Poor</label>
        <RadioBtn
          name="execution"
          value="poor"
          checked={values.execution === 'poor' ? true : false}
          onClick={onConclusionChange}
        />
        <label>Both</label>
        <RadioBtn
          name="execution"
          value="both"
          checked={values.execution === 'both' ? true : false}
          onClick={onConclusionChange}
        />
        <Textarea
          placeholder="Why?"
          name="whyExecution"
          value={values.whyExecution}
          onChange={onConclusionChange}
        />
        <Textarea
          placeholder="How to improve?"
          name="improveExecution"
          value={values.improveExecution}
          onChange={onConclusionChange}
        />
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

export default ClosedTradeForm