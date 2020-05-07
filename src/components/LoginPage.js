import React from 'react'
import { connect } from 'react-redux'
import { googleLogin, twitterLogin } from '../actions/authFirebase'
import PageMainContainer from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import { ContentWrapper } from '../components_style/ContentWrapperStyled'
import { SubHeading } from '../components_style/Headings'
import Paragraph from '../components_style/Paragraph'
import TwitterButton from '../components_style/ButtonTwitterStyled'
import GoogleButton from '../components_style/ButtonGoogleStyled'
import TopLeftCorner from '../components_style/TopLeftCornerWrap'
import Span from '../components_style/Span'
import Logo from './Logo'

const LoginPage = ({ googleLogin, twitterLogin }) => (
  <PageMainContainer
    margin="20rem 10rem"
    mobileMargin="40% 1.5rem">
    <TopLeftCorner>
      <Logo />
    </TopLeftCorner>
    <FlexContainer justifyContent="center">
      <ContentWrapper alignItems="center" flexDirection="column">
        <Paragraph>No registration. Just log in. Simple.</Paragraph>
        <TwitterButton onClick={twitterLogin} />
        <GoogleButton onClick={googleLogin}>Google account</GoogleButton>
      </ContentWrapper>
    </FlexContainer>
  </PageMainContainer>
)

const mapDispatchToProps = (dispatch) => ({
  googleLogin: () => dispatch(googleLogin()),
  twitterLogin: () => dispatch(twitterLogin())
})

export default connect(null, mapDispatchToProps)(LoginPage)