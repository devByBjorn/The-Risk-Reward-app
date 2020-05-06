import React from 'react'
import StatsListTrades from './StatsListTrades'
import StatsListR from './StatsListR'
import StatsTable from './StatsTable'
import PageMainContainter from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import { SubHeading } from '../components_style/Headings'

const TradeStatsPage = () => (
  <PageMainContainter>
    <FlexContainer mobileDirection="column" justifyContent="space-around">
      <StatsListTrades />
      <StatsListR />
    </FlexContainer>
    <FlexContainer
      alignItems="center"
      justifyContent="space-around"
      mobileDirection="column"
    >
      <StatsTable useKey='setup' />
      <StatsTable useKey='market' />
    </FlexContainer>
  </PageMainContainter>
)

export default TradeStatsPage