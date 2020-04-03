import React from 'react'
import { Link } from 'react-router-dom'
import ClosedTradeTable from '../tables/ClosedTradeTable'
import ActiveTradeTable from '../tables/ActiveTradeTable'
import PendingTradeTable from '../tables/PendingTradeTabel'
import TradeTableStats from '../table-complements/TradeTableStats'
import SetDateRange from '../table-complements/TradeTableDatePick'

const TradeTablePage = () => (
  <div>
    <h1>Trade Table Page</h1>
    <Link to="/add-trade">Add Trade</Link>
    <SetDateRange />
    <h3>Closed trades</h3>
    <ClosedTradeTable />
    <br />
    <h3>Stats closed trades</h3>
    {/*<TradeTableStats />*/}
    <br />
    <h3>Active trades</h3>
    <ActiveTradeTable />
    <br />
    <h3>Pending trades</h3>
    <PendingTradeTable />
    <br />
  </div>
)

export default TradeTablePage