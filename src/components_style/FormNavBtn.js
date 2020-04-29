import React from 'react'
import styled from 'styled-components'

const FormNavBtnStyled = styled.button`
background: #fafafa;
border: 1px solid;
color: #f50057;
text-transform: uppercase;
text-align: left;

height: 100%;
width: 100%;
padding: 1rem 2rem;

span {
  display: block;
  font-size: 1.2rem;
  margin-bottom: 5px;
}

&:nth-child(even) {
  border-right: none;
}

&:nth-child(odd) {
  border-left: none;
}

&:hover {
  cursor: pointer;
  background: #eee;
}
&:focused {
  outline: none;
}

&:disabled {
  border: 1px solid #bdbdbd;
  color: #bdbdbd;
  &:hover {
    cursor: default;
    background: transparent;
  }

  &:nth-child(even) {
    border-right: none;
  }
  
  &:nth-child(odd) {
    border-left: none;
  }
}
`


export const FormNavBtn = (props) => (
  <FormNavBtnStyled
    type="button"
    {...props}
  >
    <span>{props.spanText}</span>
    {props.text}</FormNavBtnStyled>
)

export default FormNavBtn