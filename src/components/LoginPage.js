import React from 'react'
import { connect } from 'react-redux'
import { googleLogin, twitterLogin } from '../actions/authFirebase'
import Paragraph from '../components_style/Paragraph'
import LoginTwitterButton from './LoginTwitterButton'
import LoginGoogleButton from './LoginGoogleButton'
import Logo from './Logo'
import PageMainContainer from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import { ContentWrapper } from '../components_style/ContentWrapperStyled'
import TopLeftCorner from '../components_style/TopLeftCornerWrap'

export const LoginPage = ({ googleLogin, twitterLogin }) => (
  <PageMainContainer
    height="auto"
    margin="20rem 10rem"
    mobileMargin="40% 1.5rem"
    overflowY="hidden"
  >
    <TopLeftCorner>
      <Logo />
    </TopLeftCorner>
    <FlexContainer justifyContent="center">
      <ContentWrapper alignItems="center" flexDirection="column">
        <Paragraph>No registration. Just log in. Simple.</Paragraph>
        <LoginTwitterButton onClick={twitterLogin} />
        <LoginGoogleButton onClick={googleLogin} />
      </ContentWrapper>
    </FlexContainer>
  </PageMainContainer>
)

const mapDispatchToProps = (dispatch) => ({
  googleLogin: () => dispatch(googleLogin()),
  twitterLogin: () => dispatch(twitterLogin())
})

export default connect(null, mapDispatchToProps)(LoginPage)