import React from 'react'
import { connect } from 'react-redux'
import { getTotal, getAvarage, getLowest, getHighest } from '../calculations/calcR'
import HighlightedList from '../components_style/HighlightedList'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import SubHeading from '../components_style/SubHeadingStyled'
import { StatsListWrapper } from '../components_style/StatsListWrapperStyled'

const StatsListR = ({ trades }) => {
  const worstR = getLowest(trades, 'rewardToRisk')
  const bestR = getHighest(trades, 'rewardToRisk')
  const totalR = getTotal(trades, 'rewardToRisk')
  const averageR = getAvarage(trades, 'rewardToRisk')

  const listItems = [totalR, bestR, worstR, averageR]
  const itemsHeading = ['Total', 'Best', 'Worst', 'Average']

  return (
    <StatsListWrapper flexDirection="column">
      <SubHeading>R</SubHeading>
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


export default connect(mapStateToProps)(StatsListR)