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
    height="auto"
    margin="20rem 10rem"
    mobileMargin="25% 1.5rem"
    overflowY="hidden"
  >
    <TopLeftCorner>
      <Logo />
    </TopLeftCorner>
    <FlexContainer justifyContent="center">
      <ContentWrapper>
        <SubHeading
          fontSize="5rem"
          padding="2rem 0"
        >Know your edge and push it.</SubHeading>
        <Paragraph>Don't blow up another trading account. Start logging your trades today and we will help you identify your best performing markets and setups.
    </Paragraph>
        <div>
          <LinkAsButton
            to="/login"
          >Get started for free</LinkAsButton>
        </div>
      </ContentWrapper>
    </FlexContainer>
  </PageMainContainer>
)

export default LandingPage