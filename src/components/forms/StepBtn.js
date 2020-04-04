import React from 'react'

const StepBtn = (props) => {
  return (
    <button
      text={props.text}
      onClick={props.onClick}
    >
      {props.text}</button>
  )
}

export default StepBtn