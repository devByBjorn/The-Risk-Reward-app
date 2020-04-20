import React from 'react'
import { connect } from 'react-redux'

const ThOnlyDesktop = (props) => (
  <th className="desktop">
    <button
      {...props}
    >{props.heading}</button>
  </th>
)
const ThMobileAndDesktop = (props) => (
  <th className="mobile">
    <button
      {...props}
    >{props.heading}</button>
  </th>
)

export { ThMobileAndDesktop, ThOnlyDesktop }
