import React from 'react'
import { formDate } from '../helpers/formDate'
import FlexContainer from '../components_style/FlexContainer'
import ListU from '../components_style/ListU'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import { SubHeading } from '../components_style/Headings'

const OverviewClosedTrade = ({ values }) => {
  const { market, direction, setup, entry, stop, target, status, opened,
    closed, execution, whyExecution, improveExecution,
    management, whyManagement, improveManagement } = values

  return (
    <FlexContainer direction="column">
      <FlexContainer justifyContent="space-between">
        <ListU>
          <ListItem><Span fontWeight="bold">Status</Span> : {status.toUpperCase()}</ListItem>
          <ListItem><Span fontWeight="bold">Opened</Span> : {formDate(opened)}</ListItem>
          <ListItem><Span fontWeight="bold">Closed</Span> : {formDate(closed)}</ListItem>
        </ListU>

        <ListU>
          <ListItem><Span fontWeight="bold">Market</Span> : {market.toUpperCase()}</ListItem>
          <ListItem><Span fontWeight="bold">Direction</Span> : {direction.toUpperCase()}</ListItem>
          <ListItem><Span fontWeight="bold">Setup</Span> : {setup.toUpperCase()}</ListItem>
        </ListU>

        <ListU>
          <ListItem><Span fontWeight="bold">Entry</Span> : {entry.toUpperCase()}</ListItem>
          <ListItem><Span fontWeight="bold">Stop</Span> : {stop.toUpperCase()}</ListItem>
          <ListItem><Span fontWeight="bold">Target</Span> : {target.toUpperCase()}</ListItem>
        </ListU>
      </FlexContainer>

      <FlexContainer direction="column" borderTop="1px solid #eee">
        <SubHeading>Execution : {execution.toUpperCase()}</SubHeading>
        <ListU>
          <ListItem><Span fontSize="2rem" fontWeight="bold" display="block">Why</Span>{whyExecution}</ListItem>
          <ListItem><Span fontSize="2rem" fontWeight="bold" display="block">Improve</Span>{improveExecution}</ListItem>
        </ListU>
      </FlexContainer>

      <FlexContainer direction="column" borderTop="1px solid #eee">
        <SubHeading>Management : {management.toUpperCase()}</SubHeading>
        <ListU>
          <ListItem><Span fontSize="2rem" fontWeight="bold" display="block">Why</Span>{whyManagement}</ListItem>
          <ListItem><Span fontSize="2rem" fontWeight="bold" display="block">Improve</Span>{improveManagement}</ListItem>
        </ListU>
      </FlexContainer>
    </FlexContainer>
  )
}

export default OverviewClosedTrade