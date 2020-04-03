import React from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'

class SetOpenDateForActive extends React.Component {
  state = {
    focused: false,
  }
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  continue = e => {
    e.preventDefault()
    this.props.nextStep()
  }
  onFocusChange = () => {
    const focused = !this.state.focused
    this.setState(() => ({ focused }))
  }
  render() {
    const { values, onOpenDateChange } = this.props
    return (
      <React.Fragment>
        {/* <div className="history">
          <ul>
            <li>Market: {values.market}</li>
            <li>Direction: {values.direction}</li>
            <li>Entry: {values.entry}</li>
            <li>Stop: {values.stop}</li>
            <li>Target: {values.target}</li>
            <li>Status: {values.status}</li>
            <li>Status: {moment(values.opened).format('MM/DD/YY')}</li>
          </ul>
        </div>*/}
        <label>Opened</label>
        <SingleDatePicker
          date={values.opened}
          onDateChange={onOpenDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
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

export default SetOpenDateForActive