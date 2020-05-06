import React from 'react'
import { connect } from 'react-redux'
import { getOutcomeCount, getHitRatio } from '../calculations/calcOutcomes'
import ListU from '../components_style/ListU'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import { SubHeading } from '../components_style/Headings'
import { StatsListWrapper } from '../components_style/StatsListWrapperStyled'

const StatsListTrades = ({ trades }) => {
  const winRatio = getHitRatio(trades)
  const losses = getOutcomeCount(trades, 'loss')
  const wins = getOutcomeCount(trades, 'wins')
  const scratched = getOutcomeCount(trades, 'scratch')

  return (
    <StatsListWrapper flexDirection="column">
      <SubHeading><Span color="#1d3adf" display="inline">|</Span>Trades</SubHeading>
      <ListU background="#eee" padding="0">
        <ListItem>
          <Span fontWeight="bold">Total</Span>
          {trades.length > 0 ? trades.length : '-'}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">Wins</Span>
          {trades.length ? wins : '-'}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">Losses</Span>
          {trades.length ? losses : '-'}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">Scratched</Span>
          {trades.length ? scratched : '-'}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">WinRate</Span>
          {trades.length ? `${winRatio}%` : '-'}
        </ListItem>
      </ListU>
    </StatsListWrapper>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})

export default connect(mapStateToProps)(StatsListTrades)