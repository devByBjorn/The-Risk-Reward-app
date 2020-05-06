import React from 'react'
import styled from 'styled-components'

const GoogleButtonStyled = styled.button`
  background: #DB4437;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  height: 5rem;
  font-family: open-sans;
  font-size: 2rem;
  margin: 5px 0;
  width: 26rem;
  transition: background .3s ease;
  &:hover {
    background:#E94B46;
  }
`

const GoogleButton = ({ onClick }) => {
  return (
    <GoogleButtonStyled
      onClick={onClick}
    >
      <span>Google</span>
    </GoogleButtonStyled>
  )
}

export default GoogleButton