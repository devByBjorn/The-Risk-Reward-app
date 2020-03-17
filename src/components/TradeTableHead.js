import React from 'react'
import { connect } from 'react-redux'

const TableHead = (props) => (
  <th>
    <button
      className="th-btn"
      value={props.value}
      onClick={props.onClick}
    >{props.heading}</button>
  </th>
)

export default connect()(TableHead)