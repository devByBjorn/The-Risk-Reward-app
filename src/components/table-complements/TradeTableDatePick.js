import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setStartDate, setEndDate } from '../../actions/filterActions'

class SetDateRange extends React.Component {
  state = {
    focused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate))
    this.props.dispatch(setEndDate(endDate))
  }
  onFocusChange = (focused) => {
    this.setState(() => ({ focused }))
  }
  render() {
    return (
      <div>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ filters: state.filters })


export default connect(mapStateToProps)(SetDateRange)