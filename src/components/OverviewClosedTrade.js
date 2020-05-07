import React from 'react'
import { formDate } from '../helpers/formDate'
import FlexContainer from '../components_style/FlexContainer'
import ContentContainer from '../components_style/FlexContainer'
import ListU from '../components_style/ListU'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import { SubHeading } from '../components_style/Headings'
import { HorizontalLine } from '../components_style/LineBreak'

const OverviewClosedTrade = ({ values }) => {
  const { market, direction, setup, entry, stop, target, status, opened,
    closed, execution, whyExecution, improveExecution,
    management, whyManagement, improveManagement } = values

  return (
    <FlexContainer flexDirection="column">
      <ContentContainer justifyContent="start">
        <ListU>
          <ListItem><Span>Status</Span> {status.toUpperCase()}</ListItem>
          <ListItem><Span>Opened</Span> {formDate(opened)}</ListItem>
          <ListItem><Span>Closed</Span> {formDate(closed)}</ListItem>

          <ListItem><Span>Market</Span> {market.toUpperCase()}</ListItem>
          <ListItem><Span>Direction</Span> {direction.toUpperCase()}</ListItem>
          <ListItem><Span>Setup</Span> {setup.toUpperCase()}</ListItem>

          <ListItem><Span>Entry</Span> {entry}</ListItem>
          <ListItem><Span>Stop</Span> {stop}</ListItem>
          <ListItem><Span>Target</Span> {target}</ListItem>
        </ListU>
      </ContentContainer>
      <HorizontalLine />
      <ContentContainer flexDirection="column" borderTop="1px solid #eee" padding="5rem 0">
        <SubHeading padding="2rem 0 0 1rem">Execution : {execution.toUpperCase()}</SubHeading>
        <ListU direction="column">
          <ListItem><Span fontSize="2rem">Why</Span>{whyExecution}</ListItem>
          <ListItem><Span fontSize="2rem">Improve</Span>{improveExecution}</ListItem>
        </ListU>
      </ContentContainer>
      <HorizontalLine />
      <ContentContainer flexDirection="column" borderTop="1px solid #eee">
        <SubHeading padding="2rem 0 0 1rem">Management : {management.toUpperCase()}</SubHeading>
        <ListU direction="column">
          <ListItem><Span fontSize="2rem">Why</Span>{whyManagement}</ListItem>
          <ListItem><Span fontSize="2rem">Improve</Span>{improveManagement}</ListItem>
        </ListU>
      </ContentContainer>
    </FlexContainer>
  )
}

export default OverviewClosedTrade