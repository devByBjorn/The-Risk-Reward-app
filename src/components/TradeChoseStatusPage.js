import React from 'react'
import { Link } from 'react-router-dom'

const TradeChoseStatusPage = () => (
  <div>
    <h1>Chose Trade Status Page</h1>
    <h3>Chose status of trade you like to add</h3>
    <ul>
      <li><Link to="/add-pending-trade">Pending</Link></li>
      <li><Link to="/add-active-trade">Active</Link></li>
      <li><Link to="/add-closed-trade">Closed</Link></li>
    </ul>
  </div>
)

export default TradeChoseStatusPage