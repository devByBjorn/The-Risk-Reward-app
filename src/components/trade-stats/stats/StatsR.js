import React from 'react'
import { connect } from 'react-redux'
import { getTotalR, getAvarageR, getSetupsArray, getLowestR, getHighestR } from './calculations'

const StatsR = ({ trades }) => {
  const closedTrades = trades.filter((trade) => trade.status === 'closed')
  const allSetups = getSetupsArray(trades)
  const lowestR = getLowestR(trades)
  const highestR = getHighestR(trades)

  function getAverageRPerSetup(allSetups) {
    const noDuplicateSetupName = [...new Set(allSetups)]
    const arrayOfArrays = []

    for (let i = 0; i < noDuplicateSetupName.length; i++) {
      arrayOfArrays.push(trades.filter((trade) =>
        trade.setup === noDuplicateSetupName[i] && trade))
    }
    return arrayOfArrays
  }
  const averageRPerSetup = getAverageRPerSetup(allSetups)

  return (
    <div>
      <h3>R</h3>
      <ul>
        <li>
          <span className="stats-specifics">Total R: </span>
          {closedTrades.length ? getTotalR(closedTrades) : 0}
        </li>
        <li>
          <span className="stats-specifics">Avarage R per trade: </span>
          {closedTrades.length > 1 ? getAvarageR(closedTrades) : 0}
        </li>
        <li>
          <span className="stats-specifics">Highest R: </span>{highestR}
        </li>
        <li>
          <span className="stats-specifics">Lowest R: </span>{lowestR}
        </li>
        <li>
          <span className="stats-specifics">Average R per setup: </span>
          <ul>
            {averageRPerSetup.map((singleArr, i) =>
              <li
                key={i}>{`${singleArr[i].setup}: ${getAvarageR(singleArr).toFixed(2)}`}
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

export default connect(mapStateToProps)(StatsR)