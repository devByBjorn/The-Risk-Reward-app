import React from 'react'
import { connect } from 'react-redux'
import { getOutcomeCount, getHitRatio } from './calculations'
import { closedTradesFiltered } from './CountTotalTrades'

const StatsOutcome = (props) => {
  const closedTrades = closedTradesFiltered(props)
  const hitRatio = getHitRatio(props.trades)
  return (
    <div>
      <h3>Outcomes</h3>
      <ul>
        <li><span className="stats-specifics">Losses: </span>
          {closedTrades.length ? getOutcomeCount(closedTrades, 'loss') : 0}
        </li>
        <li><span className="stats-specifics">Wins: </span>
          {closedTrades.length ? getOutcomeCount(closedTrades, 'win') : 0}
        </li>
        <li><span className="stats-specifics">Scratches: </span>
          {closedTrades.length ? getOutcomeCount(closedTrades, 'scratch') : 0}
        </li>
        <li><span className="stats-specifics">Hit ratio: </span>{`${hitRatio}%`}
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