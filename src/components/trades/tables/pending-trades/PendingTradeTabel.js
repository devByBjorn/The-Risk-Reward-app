import React from 'react'
import { connect } from 'react-redux'
import PendingTableRow from './PendingTableRow'
import { ThMobileAndDesktop, ThOnlyDesktop } from '../TradeTableHead'

const PendingTradeTable = ({ trades }) => {
  return (
    <div>
      <table className="table-grid pending">
        <caption>Pending Trades</caption>
        <thead>
          <tr>
            <ThMobileAndDesktop
              heading='Market'
            />
            <ThMobileAndDesktop
              heading='Direction'
            />
            <ThMobileAndDesktop
              heading='Setup'
            />
            <ThMobileAndDesktop
              heading='Entry'
            />
            <ThMobileAndDesktop
              heading='Stop'
            />
            <ThMobileAndDesktop
              heading='Target'
            />
            <ThMobileAndDesktop
              heading='-R'
            />
            <ThMobileAndDesktop
              heading='+R'
            />
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <PendingTableRow
              {...trade}
              key={trade.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trades: state.trades,
  }
}

export default connect(mapStateToProps)(PendingTradeTable)