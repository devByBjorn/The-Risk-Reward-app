import React from 'react'

import {
  CheckboxBtn,
  RadioBtn,
  Textarea
} from '../inputs'

class ManagementAndSubmit extends React.Component {
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
        {/*<ul>
          <li>Market: {values.market}</li>
          <li>Direction: {values.direction}</li>
          <li>Entry: {values.entry}</li>
          <li>Stop: {values.stop}</li>
          <li>Target: {values.target}</li>
          <li>Status: {values.status}</li>
          <li>Outcome: {values.outcome}</li>
          <li>Execution: {values.execution}</li>
          <li>Management: {values.management}</li>
        </ul>*/}
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
          name="whyManagement"
          value={values.whyManagement}
          onChange={onConclusionChange}
        />
        <Textarea
          placeholder="How to improve?"
          name="improveManagement"
          value={values.improveManagement}
          onChange={onConclusionChange}
        />
        <button
          onClick={this.back}
        >Back</button>
        <button
          onClick={this.continue}
        >Add Trade</button>
      </React.Fragment>
    )
  }
}

export default ManagementAndSubmit