import React from 'react'

const Btn = (props) => (
  <button
    type="button"
    name={props.name}
    value={props.value}
    text={props.text}
    onClick={props.onClick}
  >
    {props.text}</button>
)


export default Btn