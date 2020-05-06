import React from 'react'
import PageMainContainer from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import { ContentWrapper } from '../components_style/ContentWrapperStyled'
import { SubHeading } from '../components_style/Headings'
import Paragraph from '../components_style/Paragraph'
import Span from '../components_style/Span'
import LinkAsButton from '../components_style/LinkAsButtonStyled'

const LandingPage = () => (
  <PageMainContainer mobileMargin="30% 1.5rem">
    <FlexContainer justifyContent="center">
      <ContentWrapper>
        <SubHeading fontSize="5rem">Know our edge and push it.</SubHeading>
        <Paragraph lineHeight={1.5}>Welcome to <Span display="inline" fontWeight="bold">EdgePusher</Span>. We help you as trader to identify your best performing markets and setups, so you can push risk where it is due, without blowing up your account.
      </Paragraph>
        <Paragraph>
          <LinkAsButton
            to="/login">Get started for free</LinkAsButton>
        </Paragraph>
      </ContentWrapper>
    </FlexContainer>
  </PageMainContainer>
)

export default LandingPage