import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter'
import TwitterButtonStyled from '../components_style/LoginTwitterButtonStyled'

const LoginTwitterButton = ({ onClick }) => {

  return (
    <TwitterButtonStyled
      onClick={onClick}
    >
      <TwitterIcon
      />
    </TwitterButtonStyled>
  )
}

export default LoginTwitterButton