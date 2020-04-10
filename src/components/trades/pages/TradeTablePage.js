import React from 'react'
import { Link } from 'react-router-dom'
import ClosedTradeTable from '../tables/closed-trades/ClosedTradeTable'
import ActiveTradeTable from '../tables/active-trades/ActiveTradeTable'
import PendingTradeTable from '../tables/pending-trades/PendingTradeTabel'
import SetDateRange from '../table-complements/TradeTableDatePick'

const TradeTablePage = () => (
  <React.Fragment>
    <h1>Trade Table Page</h1>
    <Link to="/add-trade">Add Trade</Link>
    <SetDateRange />
    <h3>Closed trades</h3>
    <ClosedTradeTable />
    <br />
    <h3>Active trades</h3>
    <ActiveTradeTable />
    <br />
    <h3>Pending trades</h3>
    <PendingTradeTable />
    <br />
  </React.Fragment>
)

export default TradeTablePage