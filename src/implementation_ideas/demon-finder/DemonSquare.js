import React from 'react'
import Btn from '../../components/utilities/Btn'

const Square = (props) => (
  <Btn
    className="square"
    text={props.value}
    onClick={() => props.onClick({ value: 'X' })}
  />
)

export default Square