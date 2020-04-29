import React from 'react'
import { connect } from 'react-redux'

const ClosedTradesTotal = ({ trades }) => (
  <h2>Total Closed Trades: {trades.length}</h2>
)

const mapStateToProps = (state) => {
  return {
    trades: state.trades.filter((trade) => trade.status === 'closed')
  }
}

export default connect(mapStateToProps)(ClosedTradesTotal)