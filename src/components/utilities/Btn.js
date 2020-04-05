import React from 'react'

const Btn = (props) => (
  <button
    type="button"
    {...props}
  >
    {props.text}</button>
)


export default Btn