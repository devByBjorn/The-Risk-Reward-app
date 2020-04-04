import React from 'react'
import { connect } from 'react-redux'

const TableHeadBtn = (props) => (
  <th>
    <button
      className="th-btn"
      value={props.value}
      onClick={props.onClick}
    >{props.heading}</button>
  </th>
)

export default connect()(TableHeadBtn)
