import React from 'react'
import { connect } from 'react-redux'

const TableHeadBtn = ({ value, onClick, heading }) => (
  <th>
    <button
      className="th-btn"
      value={value}
      onClick={onClick}
    >{heading}</button>
  </th>
)

export default connect()(TableHeadBtn)
