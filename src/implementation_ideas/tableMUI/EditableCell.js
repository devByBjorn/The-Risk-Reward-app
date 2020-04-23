import React, { Fragment, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteFirebaseTrade, editFirebaseTrade } from '../../actions/tradeActions'

const inputStyle = {
  padding: 0,
  margin: 0,
  border: 0,
  background: 'transparent',
}

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed externall, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <input
      style={inputStyle}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}

const mapDispatchToProps = (dispatch) => ({
  editFirebaseTrade: (id, trade) => dispatch(editFirebaseTrade(id, trade))
})

export default connect(null, mapDispatchToProps)(EditableCell)

// EditableCell.propTypes = {
//   cell: PropTypes.shape({
//     value: PropTypes.any.isRequired,
//   }),
//   row: PropTypes.shape({
//     index: PropTypes.number.isRequired,
//   }),
//   column: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//   }),
//   updateMyData: PropTypes.func.isRequired,
// }