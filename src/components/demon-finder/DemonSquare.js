import React from 'react'

const Square = (props) => (
  <button className="square"
    onClick={() => props.onClick({ value: 'X' })}
  >{props.value}
  </button>
)

export default Square