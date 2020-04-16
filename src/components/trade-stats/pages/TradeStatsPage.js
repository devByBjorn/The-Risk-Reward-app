import React from 'react'
import StatsOutcome from '../stats/StatsOutcome'
import StatsR from '../stats/StatsR'
import CountTotalTrades from '../stats/CountTotalTrades'
import StatsSetups from '../stats/StatsSetups'

const TradeStatsPage = () => (
  <div className="container stats">
    <CountTotalTrades />
    <StatsOutcome />
    <StatsR />
    <StatsSetups />
  </div>
)

export default TradeStatsPage