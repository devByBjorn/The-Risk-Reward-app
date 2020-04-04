import React from 'react'

class InspectAndSubmitPending extends React.Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleSubmit } = this.props
    return (
      <React.Fragment>
        <div className="history">
          <ul>
            <li>Market: {values.market}</li>
            <li>Direction: {values.direction}</li>
            <li>Entry: {values.entry}</li>
            <li>Stop: {values.stop}</li>
            <li>Target: {values.target}</li>
            <li>Status: {values.status}</li>
          </ul>
        </div>
        <button
          onClick={this.back}
        >Back</button>
        <button
          onClick={handleSubmit}
        >Add</button>
      </React.Fragment>
    )
  }
}

export default InspectAndSubmitPending