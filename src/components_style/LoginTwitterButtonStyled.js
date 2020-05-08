import React from 'react'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter'

const TwitterButtonStyled = styled.button`
  background: rgb(29, 161, 242);
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  height: 5rem;
  margin: 5px 0;
  width: 26rem;
  transition: background .3s ease;
  &:hover {
    background:rgb(29, 148, 242);
  }
`

const TwitterButton = ({ onClick }) => {

  return (
    <TwitterButtonStyled
      onClick={onClick}
    >
      <TwitterIcon
      />
    </TwitterButtonStyled>
  )
}

export default TwitterButtonStyled