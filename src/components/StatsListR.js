import React from 'react'
import { connect } from 'react-redux'
import { getTotal, getAvarage, getLowest, getHighest } from '../calculations/calcR'
import HighlightedList from '../components_style/HighlightedList'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import SubHeading from '../components_style/SubHeadingStyled'
import { StatsListWrapper } from '../components_style/StatsListWrapperStyled'

const StatsListR = ({ trades }) => {
  const worstR = getLowest(trades, 'rMultiple')
  const bestR = getHighest(trades, 'rMultiple')
  const totalR = getTotal(trades, 'rMultiple')
  const averageR = getAvarage(trades, 'rMultiple')

  return (
    <StatsListWrapper flexDirection="column">
      <SubHeading>R</SubHeading>
      <HighlightedList>
        <ListItem>
          <Span>Total</Span>
          {trades.length ? `${totalR}` : '-'}
        </ListItem>
        <ListItem>
          <Span>Best</Span>
          {trades.length ? `${bestR}` : '-'}
        </ListItem>
        <ListItem>
          <Span>Worst</Span>
          {trades.length ? `${worstR}` : '-'}</ListItem>
        <ListItem>
          <Span>Average</Span>
          {trades.length > 1 ? `${averageR}` : '-'}
        </ListItem>
      </HighlightedList>
    </StatsListWrapper>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})


export default connect(mapStateToProps)(StatsListR)