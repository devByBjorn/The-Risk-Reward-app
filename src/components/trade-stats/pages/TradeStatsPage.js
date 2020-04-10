import React from 'react'
import StatsOutcome from '../stats/StatsOutcome'
import StatsR from '../stats/StatsR'
import CountTotalTrades from '../stats/CountTotalTrades'
import StatsSetups from '../stats/StatsSetups'

const TradeStatsPage = () => (
  <React.Fragment>
    <CountTotalTrades />
    <StatsOutcome />
    <StatsR />
    <StatsSetups />
  </React.Fragment>
)

export default TradeStatsPage