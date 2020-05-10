import React from 'react'
import { formDate } from '../helpers/formDate'
import FlexContainer from '../components_style/FlexContainer'
import ContentContainer from '../components_style/FlexContainer'
import HighlightedList from '../components_style/HighlightedList'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import SubHeading from '../components_style/SubHeadingStyled'
import { capitalize } from '../helpers/capitalize'

//status, 

const OverviewClosedTrade = ({ values }) => {
  const { market, direction, setup, entry, stop, target, exit, status,
    opened, closed, execution, whyExecution, improveExecution,
    management, whyManagement, improveManagement } = values

  return (
    <FlexContainer flexDirection="column">
      <ContentContainer justifyContent="start">
        <HighlightedList>
          <ListItem><Span>Status</Span> {status.toUpperCase()}</ListItem>
          <ListItem><Span>Opened</Span> {formDate(opened)}</ListItem>
          <ListItem><Span>Closed</Span> {formDate(closed)}</ListItem>
          <ListItem><Span>Market</Span> {market.toUpperCase()}</ListItem>
          <ListItem><Span>Direction</Span> {direction.toUpperCase()}</ListItem>
          <ListItem><Span>Setup</Span> {setup.toUpperCase()}</ListItem>
          <ListItem><Span>Entry</Span> {entry}</ListItem>
          <ListItem><Span>Stop</Span> {stop}</ListItem>
          <ListItem><Span>Target</Span> {target}</ListItem>
          <ListItem><Span>Exit</Span> {exit}</ListItem>
        </HighlightedList>
      </ContentContainer>

      <ContentContainer flexDirection="column">
        <SubHeading padding="3rem 0 1rem 0">{capitalize(execution)} execution</SubHeading>
        <HighlightedList direction="column">
          <ListItem><Span fontSize="2rem">Why</Span>{whyExecution}</ListItem>
          <ListItem><Span fontSize="2rem">Improve</Span>{improveExecution}</ListItem>
        </HighlightedList>
      </ContentContainer>

      <ContentContainer flexDirection="column">
        <SubHeading padding="3rem 0 1rem 0">{capitalize(management)} management</SubHeading>
        <HighlightedList direction="column">
          <ListItem><Span fontSize="2rem">Why</Span>{whyManagement}</ListItem>
          <ListItem><Span fontSize="2rem">Improve</Span>{improveManagement}</ListItem>
        </HighlightedList>
      </ContentContainer>
    </FlexContainer>
  )
}

export default OverviewClosedTrade