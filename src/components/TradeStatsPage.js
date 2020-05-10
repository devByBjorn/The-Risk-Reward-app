import React from 'react'
import StatsListTrades from './StatsListTrades'
import StatsListR from './StatsListR'
import StatsTable from './StatsTable'
import PageMainContainter from '../components_style/PageMainContainer'
import FlexContainer from '../components_style/FlexContainer'
import Paragrapgh from '../components_style/Paragraph'
import { HorizontalLine } from '../components_style/LineBreak'

const TradeStatsPage = () => (
  <PageMainContainter mobileMargin="10% 1.5rem">
    <FlexContainer mobileDirection="column" justifyContent="space-around">
      <StatsListTrades />
      <StatsListR />
    </FlexContainer>
    <FlexContainer
      justifyContent="space-around" mobileDirection="column">
      <StatsTable keyOfUse='market' />
      <StatsTable keyOfUse='setup' />
    </FlexContainer>
  </PageMainContainter>
)

export default TradeStatsPage