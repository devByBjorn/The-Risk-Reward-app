import React from 'react'
import FlexContainer from '../components_style/FlexContainer'
import ListU from '../components_style/ListU'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'



const OverviewPendingTrade = ({ values }) => {
  const { market, direction, setup, entry, stop, target, status } = values

  return (
    <FlexContainer alignItems="start" justifyContent="space-around" height="auto" padding="8rem 0" >

      <ListU>
        <ListItem><Span>Status</Span>{status.toUpperCase()}</ListItem>
        <ListItem><Span>Market</Span>{market.toUpperCase()}</ListItem>
      </ListU>

      <ListU>
        <ListItem><Span>Direction</Span>{direction.toUpperCase()}</ListItem>
        <ListItem><Span>Setup</Span>{setup.toUpperCase()}</ListItem>
      </ListU>

      <ListU>
        <ListItem><Span>Entry</Span>{entry}</ListItem>
        <ListItem><Span>Stop</Span>{stop}</ListItem>
        <ListItem><Span>Target</Span>{target}</ListItem>
      </ListU>

    </FlexContainer>
  )
}

export default OverviewPendingTrade