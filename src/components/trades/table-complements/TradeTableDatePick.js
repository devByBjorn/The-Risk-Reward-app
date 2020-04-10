import React, { useState } from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setStartDate, setEndDate } from '../../../actions/filterActions'

const SetDatePicker = ({ setStartDate, setEndDate, filters }) => {
  const [focused, setFocused] = useState(null)

  const onDatesChange = ({ startDate, endDate }) => {
    setStartDate(startDate)
    setEndDate(endDate)
  }
  return (
    <div>
      <DateRangePicker
        startDate={filters.startDate}
        startDateId={"trade-table-start-date-id"}
        endDate={filters.endDate}
        endDateId="trade-table-end-date"
        onDatesChange={onDatesChange}
        focusedInput={focused}
        onFocusChange={(focused) => setFocused(focused)}
        numberOfMonths={1}
        isOutsideRange={() => false}
        showClearDates={true}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({ filters: state.filters })
const mapDispatchToProps = (dispatch) => ({
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate)),
})


export default connect(mapStateToProps, mapDispatchToProps)(SetDatePicker)
