import React from 'react'
import { NavLink } from 'react-router-dom'
import TradeTable from './tables/TradeTable'
import ActiveTradeTable from './tables/ActiveTradeTable'
import PendingTradeTable from './tables/PendingTradeTabel'
import TradeTableStats from './table-complements/TradeTableStats'
import SetDateRange from './table-complements/TradeTableDatePick'

const TradeTablePage = () => (
  <div>
    <h1>Trade Table Page</h1>
    <NavLink to="/add-trade">Add Trade</NavLink>
    <SetDateRange />
    <h3>Closed trades</h3>
    <TradeTable />
    <br />
    <h3>Stats closed trades</h3>
    <TradeTableStats />
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