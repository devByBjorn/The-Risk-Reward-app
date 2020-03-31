import React from 'react'

export const CheckboxBtn = (props) => (
  <input
    type="checkbox"
    {...props}
  />
)

export const RadioBtn = (props) => (
  <input
    type="radio"
    {...props}
  />
)

export const TextInput = (props) => (
  <input
    type='text'
    {...props}
  />
)

export const Textarea = (props) => (
  <textarea
    type="test"
    {...props}
  />
)



// <input
// type="radio"
// name="execution"
// value="well"
// checked={this.state.conclusion.execution === 'well' ? true : false}
// onClick={this.onConclusionChange}
// />
