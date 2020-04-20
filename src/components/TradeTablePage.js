import React from 'react'
import ClosedTradeTable from './ClosedTradeTable'
import ActiveTradeTable from './ActiveTradeTable'
import PendingTradeTable from './PendingTradeTabel'
import SetDateRange from './TradeTableDatePick'


const TradeTablePage = () => (
  <React.Fragment>
    <h1>Trade Table Page</h1>
    <ClosedTradeTable />
    <br />
    <ActiveTradeTable />
    <br />
    <PendingTradeTable />
    <br />
  </React.Fragment>
)

export default TradeTablePage