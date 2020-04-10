import React from 'react'
import { connect } from 'react-redux'
import { getOutcomeCount, getHitRatio } from './calculations/calcOutcomes'
import { filterByStatus } from './calculations/calcStatus'

const StatsOutcome = ({ trades }) => {
  const closedTrades = filterByStatus(trades, 'closed')
  const hitRatio = getHitRatio(trades)
  return (
    <div>
      <h3>Outcomes</h3>
      <ul>
        <li><span className="stats-specific">Losses: </span>
          {closedTrades.length ? getOutcomeCount(closedTrades, 'loss') : 0}
        </li>
        <li><span className="stats-specific">Wins: </span>
          {closedTrades.length ? getOutcomeCount(closedTrades, 'win') : 0}
        </li>
        <li><span className="stats-specific">Scratches: </span>
          {closedTrades.length ? getOutcomeCount(closedTrades, 'scratch') : 0}
        </li>
        <li><span className="stats-specific">Hit ratio: </span>{closedTrades.length ? `${hitRatio}%` : 0}
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

export default connect(mapStateToProps)(StatsOutcome)