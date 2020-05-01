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
        <ListItem><Span fontWeight="bold">Status</Span> : {status.toUpperCase()}</ListItem>
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
  )
}

export default OverviewPendingTrade