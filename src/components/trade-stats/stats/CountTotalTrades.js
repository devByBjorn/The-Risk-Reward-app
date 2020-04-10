import React from 'react'
import { connect } from 'react-redux'
import { filterByStatus } from './calculations/calcStatus'

const ClosedTradesTotal = ({ trades }) => {
  const closedTrades = filterByStatus(trades, 'closed')
  return (
    <h2>Total Closed Trades: {closedTrades.length}</h2>
  )
}

const mapStateToProps = (state) => {
  return {
    trades: state.trades
  }
}

export default connect(mapStateToProps)(ClosedTradesTotal)