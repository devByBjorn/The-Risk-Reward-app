import React, { useState } from 'react'
import moment from 'moment'
import { SingleDatePicker, isInclusivelyBeforeDay } from 'react-dates'
import Btn from '../../../utilities/Btn'


const SetOpenDateForActive = ({ values, nextStep, prevStep, onOpenDateChange }) => {
  const [focused, setFocused] = useState(false)

  const next = e => {
    e.preventDefault()
    nextStep()
  }

  const back = e => {
    e.preventDefault()
    prevStep()
  }
  return (
    <React.Fragment>
      <label>Opened</label>
      <SingleDatePicker
        date={values.opened}
        onDateChange={onOpenDateChange}
        focused={focused}
        onFocusChange={(focused) => setFocused(focused)}
        numberOfMonths={1}
        isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
      />
      <Btn
        text="Back"
        onClick={back}
      />
      <Btn
        text="Next"
        onClick={next}
      />
    </React.Fragment>
  )

}

// class SetOpenDateForActive extends React.Component {
//   state = {
//     focused: false,
//   }
//   back = e => {
//     e.preventDefault();
//     this.props.prevStep();
//   };
//   continue = e => {
//     e.preventDefault()
//     this.props.nextStep()
//   }
//   onFocusChange = () => {
//     const focused = !this.state.focused
//     this.setState(() => ({ focused }))
//   }
//   render() {
//     const { values, onOpenDateChange } = this.props
//     return (
//       <React.Fragment>
//         <label>Opened</label>
//         <SingleDatePicker
//           date={values.opened}
//           onDateChange={onOpenDateChange}
//           focused={this.state.focused}
//           onFocusChange={this.onFocusChange}
//           numberOfMonths={1}
//           isOutsideRange={day => !isInclusivelyBeforeDay(day, moment())}
//         />
//         <Btn
//           text="Back"
//           onClick={this.back}
//         />
//         <Btn
//           text="Next"
//           onClick={this.continue}
//         />
//       </React.Fragment>
//     )
//   }
// }

export default SetOpenDateForActive