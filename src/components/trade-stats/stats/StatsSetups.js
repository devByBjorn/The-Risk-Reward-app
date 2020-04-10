import React from 'react'
import { connect } from 'react-redux'
import { getObjectCountList, objListToArr } from './calculations/objLists'
import { getSetupsArray, outcomePerSetup, getAverageRPerSetup } from './calculations/calcSetups'
import { getAvarageR } from './calculations/calcR'

const StatsSetups = ({ trades }) => {
  const bestSetup = outcomePerSetup(trades, 'win').mostCountedSetup
  const bestSetupWins = outcomePerSetup(trades, 'win').arrOfMostCountedSetup

  const worstSetup = outcomePerSetup(trades, 'loss').mostCountedSetup
  const worstSetupLosses = outcomePerSetup(trades, 'loss').arrOfMostCountedSetup

  const allSetups = getSetupsArray(trades)
  const listAllSetups = getObjectCountList(allSetups)
  const setupsListArr = objListToArr(listAllSetups)

  const averageRPerSetup = getAverageRPerSetup(trades, allSetups)

  return (
    <div>
      <h3>Setups</h3>
      <ul></ul>
      <ul>
        <li><span className="stats-specific">Most wins: </span>
          {bestSetup ? `${bestSetup} (${bestSetupWins.length})` : 'No count'}
        </li>
        <li><span className="stats-specific">Most losses: </span>
          {worstSetup ? `${worstSetup} (${worstSetupLosses.length})` : 'No count'}
        </li>
        <li><span className="stats-specific">Trades per setup: </span>
          <ul className="disc-list">
            {allSetups && setupsListArr.map((setupItem, i) => <li key={i}>{setupItem}</li>)}
          </ul>
        </li>
        <li>
          <span className="stats-specific">Average R per setup: </span>
          <ul className="disc-list">
            {allSetups && averageRPerSetup.map((singleArr, i) =>
              <li
                key={i}>{`${singleArr[i].setup}: ${getAvarageR(singleArr).toFixed(2)}R`}
              </li>
            )}
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