import React from 'react'

const FormLabelAndInputPair = (props) => (
  <div>
    <label>{props.label}</label>
    <input
      {...props}
    />
  </div>
)

export default FormLabelAndInputPair