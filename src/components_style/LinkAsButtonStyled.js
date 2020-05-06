import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkAsButton = styled(Link)`
  background: #f50057;
  border: 1px solid; 
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    background: #3f51b5
  }
`
export default (props) => <LinkAsButton {...props} />