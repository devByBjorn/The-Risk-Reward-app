import React from 'react'
import TableTabs from './TableTabs'
import PageMainContainer from '../components_style/PageMainContainer'
//import TableClosedTrades from './TableClosedTrades'

const TradeTablePage = () => (
  <PageMainContainer mobileMargin="30% 1.5rem">
    {/*<TableClosedTrades />*/}
    <TableTabs />
  </PageMainContainer>
)

export default TradeTablePage