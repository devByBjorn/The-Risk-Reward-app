import React from 'react'
import { connect } from 'react-redux'
import { getOutcomeCount, getWinRatio } from '../calculations/calcOutcomes'
import HighlightedList from '../components_style/HighlightedList'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import SubHeading from '../components_style/SubHeadingStyled'
import { StatsListWrapper } from '../components_style/StatsListWrapperStyled'

export const StatsListTrades = ({ trades }) => {
  const totalTrades = trades.length
  const winRatio = getWinRatio(trades)
  const losses = getOutcomeCount(trades, 'loss')
  const wins = getOutcomeCount(trades, 'win')
  const scratched = getOutcomeCount(trades, 'scratch')

  const listItems = [totalTrades, wins, losses, scratched, `${winRatio}%`]
  const itemsHeadings = ['Total', 'Wins', 'Losses', 'Scratched', 'WinRatio']

  return (
    <StatsListWrapper flexDirection="column">
      <SubHeading>Trades</SubHeading>
      <HighlightedList>
        {listItems.map((item, i) => (
          <ListItem key={item}>
            <Span>{itemsHeadings[i]}</Span>
            {trades.length ? item : '-'}
          </ListItem>
        ))}
      </HighlightedList>
    </StatsListWrapper>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})

export default connect(mapStateToProps)(StatsListTrades)