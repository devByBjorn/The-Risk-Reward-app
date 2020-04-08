import React from 'react'
import { connect } from 'react-redux'

const TradeTableStats = (props) => {
  const getTotalR = (trades) => trades.reduce((total, trade) => total + trade.rewardToRisk, 0)
  const getAvarageR = (trades) => getTotalR(trades) / trades.length
  const getOutcomeCount = (trades, outcome) => trades.filter((trade) => trade.outcome === outcome).length

  const closedTrades = props.trades.filter((trade) => trade.status === 'closed')

  return (
    <div>
      <h4>Total Trades:{closedTrades.length}</h4>
      <ul>
        <li>Total R:{closedTrades.length ? getTotalR(closedTrades) : 0}</li>
        <li> Avarage R:{closedTrades.length > 1 ? getAvarageR(closedTrades) : 0}</li>
        <li>Losses:{closedTrades.length ? getOutcomeCount(closedTrades, 'loss') : 0}</li>
        <li>Wins:{closedTrades.length ? getOutcomeCount(closedTrades, 'win') : 0}</li>
        <li>Scratches:{closedTrades.length ? getOutcomeCount(closedTrades, 'scratch') : 0}</li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trades: state.trades
  }
}

export default connect(mapStateToProps)(TradeTableStats)