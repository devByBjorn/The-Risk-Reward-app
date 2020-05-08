import React from 'react'
import GoogleButtonStyled from '../components_style/LoginGoogleButtonStyled'

const LoginGoogleButton = ({ onClick }) => {

  return (
    <GoogleButtonStyled
      onClick={onClick}
    >Google</GoogleButtonStyled>
  )
}

export default LoginGoogleButton