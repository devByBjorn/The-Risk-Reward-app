import React from 'react'
import PageMainContainer from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import { ContentWrapper } from '../components_style/ContentWrapperStyled'
import { SubHeading } from '../components_style/Headings'
import Paragraph from '../components_style/Paragraph'
import LinkAsButton from '../components_style/LinkAsButtonStyled'
import TopLeftCorner from '../components_style/TopLeftCornerWrap'
import Logo from './Logo'

const LandingPage = () => (
  <PageMainContainer
    margin="20rem 10rem"
    mobileMargin="25% 1.5rem">
    <TopLeftCorner>
      <Logo />
    </TopLeftCorner>
    <FlexContainer justifyContent="center">
      <ContentWrapper>
        <SubHeading
          fontSize="5rem"
          padding="0 0 1rem 0"
        >Know your edge and push it.</SubHeading>
        <Paragraph>Identify your best performing markets and setups, and push risk where it is due, without blowing up another account.
    </Paragraph>
        <Paragraph>
          <LinkAsButton
            to="/login"
          >Get started for free</LinkAsButton>
        </Paragraph>
      </ContentWrapper>
    </FlexContainer>
  </PageMainContainer>
)

export default LandingPage