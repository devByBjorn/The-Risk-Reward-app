import React from 'react'

export const RadioBtn = (props) => (
  <input
    type="radio"
    name={props.name}
    value={props.value}
    checked={props.checked}
    onClick={props.OnClick}
  />
)



// <input
// type="radio"
// name="execution"
// value="well"
// checked={this.state.conclusion.execution === 'well' ? true : false}
// onClick={this.onConclusionChange}
// />
