import React from 'react'
import ClosedTradeTable from '../tables/closed-trades/ClosedTradeTable'
import ActiveTradeTable from '../tables/active-trades/ActiveTradeTable'
import PendingTradeTable from '../tables/pending-trades/PendingTradeTabel'
import SetDateRange from '../table-complements/TradeTableDatePick'


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