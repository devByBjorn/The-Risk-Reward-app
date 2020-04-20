import React from 'react'
import StatsOutcome from './StatsOutcome'
import StatsR from './StatsR'
import CountTotalTrades from './CountTotalTrades'
import StatsSetups from './StatsSetups'

const TradeStatsPage = () => (
  <div className="container stats">
    <CountTotalTrades />
    <StatsOutcome />
    <StatsR />
    <StatsSetups />
  </div>
)

export default TradeStatsPage