import React from 'react'
import { connect } from 'react-redux'

export const closedTradesFiltered = (props) => props.trades.filter((trade) => trade.status === 'closed')

const ClosedTradesTotal = (props) => {
  const closedTrades = closedTradesFiltered(props)
  return (
    <h2>Total Trades:{closedTrades.length}</h2>
  )
}

const mapStateToProps = (state) => {
  return {
    trades: state.trades
  }
}

export default connect(mapStateToProps)(ClosedTradesTotal)