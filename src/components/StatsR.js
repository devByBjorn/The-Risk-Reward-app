import React from 'react'
import { connect } from 'react-redux'
import { getTotalR, getAvarageR, getLowestR, getHighestR } from '../calculations/calcR'

const StatsR = ({ trades }) => {
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
          {trades.length ? `${getTotalR(trades)}R` : 0}
        </li>
        <li>
          <span className="stats-specific">Avarage: </span>
          {trades.length > 1 ? `${getAvarageR(trades)}R` : 'No count'}
        </li>
        <li>
          <span className="stats-specific">Highest: </span>{trades.length ? `${highestR}R` : 0}
        </li>
        <li>
          <span className="stats-specific">Lowest: </span>{trades.length ? `${lowestR}R` : 0}
        </li>
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades.filter((trade) => trade.status === 'closed')
})

export default connect(mapStateToProps)(StatsR)