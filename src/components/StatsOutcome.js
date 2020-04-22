import React from 'react'
import { connect } from 'react-redux'
import { getOutcomeCount, getHitRatio } from '../calculations/calcOutcomes'
import { filterByStatus } from '../calculations/calcStatus'

const StatsOutcome = ({ trades }) => {

  const hitRatio = getHitRatio(trades).toFixed(2)

  return (
    <div>
      <h3>Outcomes</h3>
      <ul>
        <li><span className="stats-specific">Losses: </span>
          {trades.length ? getOutcomeCount(trades, 'loss') : 0}
        </li>
        <li><span className="stats-specific">Wins: </span>
          {trades.length ? getOutcomeCount(trades, 'win') : 0}
        </li>
        <li><span className="stats-specific">Scratches: </span>
          {trades.length ? getOutcomeCount(trades, 'scratch') : 0}
        </li>
        <li><span className="stats-specific">Hit ratio: </span>{trades.length ? `${hitRatio}%` : 0}
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})

export default connect(mapStateToProps)(StatsOutcome)