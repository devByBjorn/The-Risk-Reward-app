import React from 'react'
import { connect } from 'react-redux'
import ActiveTableRow from './ActiveTableRow'
import { ThMobileAndDesktop, ThOnlyDesktop } from './TradeTableHead'
const ActiveTradeTable = ({ trades }) => (
  <div>
    <table className="table-grid active">
      <caption>Active Trades</caption>
      <thead>
        <tr>
          <ThMobileAndDesktop heading='Market' />
          <ThMobileAndDesktop heading='Direction' />
          <ThMobileAndDesktop heading='Setup' />
          <ThMobileAndDesktop heading='Entry' />
          <ThMobileAndDesktop heading='Stop' />
          <ThMobileAndDesktop heading='Target' />
          <ThOnlyDesktop heading='Opened' />
          <ThMobileAndDesktop heading='-R' />
          <ThMobileAndDesktop heading='+R' />
        </tr>
      </thead>
      <tbody>
        {trades.map((trade) =>
          (<ActiveTableRow
            {...trade}
            key={trade.id}
          />)
        )}
      </tbody>
    </table>
  </div>
)

const mapStateToProps = (state) => {
  return {
    trades: state.trades,
  }
}

export default connect(mapStateToProps)(ActiveTradeTable)