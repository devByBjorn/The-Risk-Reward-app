import React from 'react'
import { connect } from 'react-redux'
import { getTotalR, getAvarageR, getLowestR, getHighestR } from '../calculations/calcR'
import ListU from '../components_style/ListU'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import { SubHeading } from '../components_style/Headings'
import { StatsListWrapper } from '../components_style/StatsListWrapperStyled'

const StatsListR = ({ trades }) => {
  const lowestR = getLowestR(trades)
  const highestR = getHighestR(trades)
  const totalR = getTotalR(trades)
  const averageR = getAvarageR(trades)

  return (
    <StatsListWrapper flexDirection="column">
      <SubHeading>R</SubHeading>
      <ListU>
        <ListItem>
          <Span>Total</Span>
          {trades.length ? `${totalR}` : '-'}
        </ListItem>
        <ListItem>
          <Span>Highest</Span>
          {trades.length ? `${highestR}` : '-'}
        </ListItem>
        <ListItem>
          <Span>Lowest</Span>
          {trades.length ? `${lowestR}` : '-'}</ListItem>
        <ListItem>
          <Span>Average</Span>
          {trades.length > 1 ? `${averageR}` : '-'}
        </ListItem>
      </ListU>
    </StatsListWrapper>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})

export default connect(mapStateToProps)(StatsListR)