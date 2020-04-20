import React from 'react'
import { connect } from 'react-redux'
import { getTotalR, getAvarageR, getLowestR, getHighestR } from '../calculations/calcR'

const StatsR = ({ trades }) => {
  const closedTrades = trades.filter((trade) => trade.status === 'closed')
  const lowestR = getLowestR(trades)
  // trades.length && sortByR(trades)[0].rewardToRis
  const highestR = getHighestR(trades)
  //trades.length && tradessortByR(trades)[trades.length - 1].rewardToRisk

  return (
    <div>
      <h3>R</h3>
      <ul>
        <li>
          <span className="stats-specific">Total: </span>
          {closedTrades.length ? `${getTotalR(closedTrades)}R` : 0}
        </li>
        <li>
          <span className="stats-specific">Avarage: </span>
          {closedTrades.length > 1 ? `${getAvarageR(closedTrades)}R` : 0}
        </li>
        <li>
          <span className="stats-specific">Highest: </span>{closedTrades.length ? `${highestR}R` : 0}
        </li>
        <li>
          <span className="stats-specific">Lowest: </span>{closedTrades.length ? `${lowestR}R` : 0}
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trades: state.trades
  }
}

export default connect(mapStateToProps)(StatsR)