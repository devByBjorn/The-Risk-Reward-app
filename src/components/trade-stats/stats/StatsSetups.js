import React from 'react'
import { connect } from 'react-redux'
import {
  getObjectCountList,
  objListToArr,
  getSetupsArray,
  outcomePerSetup,
} from './calculations'

const StatsSetups = ({ trades }) => {
  const bestSetup = outcomePerSetup(trades, 'win').mostCountedSetup
  const bestSetupWins = outcomePerSetup(trades, 'win').arrOfMostCountedSetup

  const worstSetup = outcomePerSetup(trades, 'loss').mostCountedSetup
  const worstSetupLosses = outcomePerSetup(trades, 'loss').arrOfMostCountedSetup

  const allSetups = getSetupsArray(trades)
  const listAllSetups = getObjectCountList(allSetups)
  const setupsListArr = objListToArr(listAllSetups)

  return (
    <div>
      <h3>Setups</h3>
      <ul></ul>
      <ul>
        <li><span className="stat-specific">Most wins: </span>
          {bestSetup ? `${bestSetup} (${bestSetupWins.length})` : 'No count'}
        </li>
        <li><span className="stat-specific">Most losses: </span>
          {worstSetup ? `${worstSetup} (${worstSetupLosses.length})` : 'No count'}
        </li>
        <li><span className="stat-specific">Trades per setup: </span>
          <ul>
            {setupsListArr.map((setupItem, i) => <li key={i}>{setupItem}</li>)}
          </ul>
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

export default connect(mapStateToProps)(StatsSetups)