import React from 'react'
import { NavLink } from 'react-router-dom'
import TradeTable from './table/TradeTable'



const TradeTablePage = () => (
  <div>
    <h1>Trade Table Page</h1>
    <NavLink to="/add">Add Trade</NavLink>
    <TradeTable />
  </div>
)

export default TradeTablePage