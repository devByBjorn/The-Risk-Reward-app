import React from 'react'
import { formDate } from '../helpers/formDate'
import FlexContainer from '../components_style/FlexContainer'
import HighlightedList from '../components_style/HighlightedList'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import ContentContainer from '../components_style/FlexContainer'

const OverviewActiveTrade = ({ values }) => {
  const { market, direction, setup, entry, stop, target, status, opened } = values

  return (
    <FlexContainer>
      <ContentContainer justifyContent="start">
        <HighlightedList>
          <ListItem><Span>Status</Span>{status.toUpperCase()}</ListItem>
          <ListItem><Span>Opened</Span>{formDate(opened)}</ListItem>
          <ListItem><Span>Market</Span>{market.toUpperCase()}</ListItem>
          <ListItem><Span>Direction</Span>{direction.toUpperCase()}</ListItem>
          <ListItem><Span>Setup</Span>{setup.toUpperCase()}</ListItem>
          <ListItem><Span>Entry</Span>{entry}</ListItem>
          <ListItem><Span>Stop</Span>{stop}</ListItem>
          <ListItem><Span>Target</Span>{target}</ListItem>
        </HighlightedList>
      </ContentContainer>
    </FlexContainer>
  )
}

export default OverviewActiveTrade