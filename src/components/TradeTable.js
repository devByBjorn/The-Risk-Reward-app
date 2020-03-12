import React from 'react'
import { connect } from 'react-redux'
import TradeTableRow from './TradeTableRow'
import marketSearcher from '../market-searcher/marketSearcher'

const TradeTable = (props) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Market</th>
          <th>Direction</th>
          <th>Opened</th>
          <th>Closed</th>
          <th>Period</th>
          <th>Outcome</th>
          <th>R</th>
        </tr>
      </thead>
      <tbody>
        {props.trades.map((trade) => (
          <TradeTableRow
            {...trade}
            key={trade.id}
          />
        ))}
      </tbody>
    </table>
  </div>
)

const mapStateToProps = (state) => {
  return {
    trades: marketSearcher(state.trades, state.filters)
  }
}

export default connect(mapStateToProps)(TradeTable)


