import React from 'react'

export const Btn = (props) => (
  <button
    type="button"
    {...props}
  >
    {props.text}</button>
)

export const SubmitBtn = (props) => (
  <button>{props.text}</button>
)

export default Btn