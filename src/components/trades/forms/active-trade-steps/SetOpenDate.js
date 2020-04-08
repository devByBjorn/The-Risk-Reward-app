import React from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import Btn from '../../../utilities/Btn'

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
        <label>Opened</label>
        <SingleDatePicker
          date={values.opened}
          onDateChange={onOpenDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
        />
        <Btn
          text="Back"
          onClick={this.back}
        />
        <Btn
          text="Next"
          onClick={this.continue}
        />
      </React.Fragment>
    )
  }
}

export default SetOpenDateForActive