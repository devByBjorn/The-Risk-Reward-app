import React from 'react'
import { connect } from 'react-redux'
import { getTotalR, getAvarageR, getLowestR, getHighestR } from '../calculations/calcR'
import FlexContainer from '../components_style/FlexContainer'
import ListU from '../components_style/ListU'
import ListItem from '../components_style/ListItem'
import Span from '../components_style/Span'
import { SubHeading } from '../components_style/Headings'
import { HorizontalLine } from '../components_style/LineBreak'

const StatsListR = ({ trades }) => {
  const lowestR = getLowestR(trades)
  const highestR = getHighestR(trades)
  const totalR = getTotalR(trades)
  const averageR = getAvarageR(trades)

  return (
    <FlexContainer direction="column" padding="0 2rem">
      <SubHeading margin><Span color="#1d3adf" display="inline">|</Span>R</SubHeading>
      <HorizontalLine />
      <ListU background="#eee" padding="0">
        <ListItem>
          <Span fontWeight="bold">Total</Span>
          {`${totalR}R`}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">Highest</Span>
          {trades.length ? `${highestR}R` : 0}
        </ListItem>
        <ListItem>
          <Span fontWeight="bold">Lowest</Span>
          {trades.length ? `${lowestR}R` : 0}</ListItem>
        <ListItem>
          <Span fontWeight="bold">Average</Span>
          {trades.length > 1 ? `${averageR}R` : 'No count'}
        </ListItem>
      </ListU>
    </FlexContainer>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})

export default connect(mapStateToProps)(StatsListR)