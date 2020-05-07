import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkAsButton = styled(Link)`
  background: ${props => props.theme.colors.standOut.pink};
  border: 1px solid; 
  border-radius: 5px;
  color: ${props => props.theme.colors.general.light};
  cursor: pointer;
  font-weight: 600;
  padding: 5px 10px;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme.colors.standOut.blue};
  }
`
export default (props) => <LinkAsButton {...props} />