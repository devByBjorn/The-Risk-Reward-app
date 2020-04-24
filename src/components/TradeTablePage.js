import React from 'react'
import ClosedTradeTable from './ClosedTradeTable'
import ActiveTradeTable from './ActiveTradeTable'
import PendingTradeTable from './PendingTradeTabel'
import SetDateRange from './TradeTableDatePick'
import AppTable from '../implementation_ideas/tables/tableRender'
import TableClosedTrades from '../implementation_ideas/tableMUI/TableClosedTrades'
import TableActiveTrades from '../implementation_ideas/tableMUI/TableActiveTrades'
import TablePendingTrades from '../implementation_ideas/tableMUI/TablePendingTrades'
import TableTabs from '../implementation_ideas/tableMUI/TableTabs'
import PageContainer from '../components_style/PageContainerStyled'
import Container from '@material-ui/core/Container';
const TradeTablePage = () => (
  <PageContainer>
    <h1>Trade Table Page</h1>
    <TableTabs />
    {/*<TablePendingTrades />
    <TableActiveTrades />
    <TableClosedTrades />*/}
    { /*  
      <AppTable />
      <ClosedTradeTable />
    <br />
    <ActiveTradeTable />
    <br />
    <PendingTradeTable />
 <br />*/}
  </PageContainer>
)

export default TradeTablePage