import React from 'react'
import { NavLink } from 'react-router-dom'
import TradeTable from './TradeTable'
import TradeAddPage from './TradeAddPage'
import TradeTableTwo from './TradeTableTwo'

const TradeTablePage = () => (
  <div>
    <h1>Trade Table Page</h1>
    <NavLink to="/add">Add Trade</NavLink>
    <TradeTable />
  </div>
)

export default TradeTablePage