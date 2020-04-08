import React from 'react'
import { connect } from 'react-redux'
import TableHead from '../TradeTableHead'
import PendingTableRow from './PendingTableRow'

const PendingTradeTable = ({ trades }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <TableHead
              heading='Market'
            />
            <TableHead
              heading='Direction'
            />
            <TableHead
              heading='Setup'
            />
            <TableHead
              heading='Entry'
            />
            <TableHead
              heading='Stop'
            />
            <TableHead
              heading='Target'
            />
            <TableHead
              heading='-R'
            />
            <TableHead
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