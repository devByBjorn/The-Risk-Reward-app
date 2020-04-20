import React from 'react'
import styled from 'styled-components'


const TextField = (props) => (
  <input
    {...props}
  />
)

const FormTextField = styled(TextField)`
  background: transparent;
  border: none;
  border-bottom: 2px solid #476282;
  padding: 5px 5px 2px 1px;
  transition: all .5s ease;

  &::-webkit-input-placeholder {
    color: #476282;
  }

  &:focus {
    background: '#fff';
    border-color:#00A4EF;
    outline: none;

    &::-webkit-input-placeholder {
      color:#00A4EF;
    }
  }
`
export { FormTextField }