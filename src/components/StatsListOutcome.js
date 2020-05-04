import React from 'react'
import { connect } from 'react-redux'
import { getOutcomeCount, getHitRatio } from '../calculations/calcOutcomes'
import FlexContainer from '../components_style/FlexContainer'
import ListU from '../components_style/ListU'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import { SubHeading } from '../components_style/Headings'
import { HorizontalLine } from '../components_style/LineBreak'


const StatsListOutcome = ({ trades }) => {
  const winRatio = getHitRatio(trades)
  const losses = getOutcomeCount(trades, 'loss')
  const wins = getOutcomeCount(trades, 'wins')
  const scratched = getOutcomeCount(trades, 'scratch')

  return (
    <FlexContainer direction="column" padding="0 2rem">
      <SubHeading><Span color="#1d3adf" display="inline">|</Span>Trades</SubHeading>
      <HorizontalLine />
      <ListU background="#eee" padding="0">
        <ListItem>
          <Span fontWeight="bold">Total</Span>
          {trades.length}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">Wins</Span>
          {trades.length ? wins : 0}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">Losses</Span>
          {trades.length ? losses : 0}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">Scratched</Span>
          {trades.length ? scratched : 0}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">WinRatio</Span>
          {`${winRatio}%`}
        </ListItem>
      </ListU>
    </FlexContainer>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})

export default connect(mapStateToProps)(StatsListOutcome)