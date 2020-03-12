import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment'

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

        {/* TABLE ROW Format*/}

        {props.trades.map((trade) => {
          return (

            <tr key={trade.id}>
              <td>{trade.market.toUpperCase()}</td>
              <td>{trade.direction}</td>
              <td>{moment(trade.startDate).format('YYYY-MM-DD')}</td>
              <td>{moment(trade.endDate).format('YYYY-MM-DD')}</td>
              <td>{trade.period}</td>
              <td>{trade.outcome}</td>
              <td>{trade.riskReward}</td>
            </tr>

          )
        })}
      </tbody>
    </table>
  </div>
)

const mapStateToProps = (state) => {
  return {
    trades: state.trades
  }
}

export default connect(mapStateToProps)(TradeTable)


