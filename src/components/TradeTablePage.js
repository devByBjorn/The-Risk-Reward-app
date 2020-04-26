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
import PageMainContainer from '../components_style/PageMainContainer'

const TradeTablePage = () => (
  <PageMainContainer>
    <TableTabs />
  </PageMainContainer>
)

export default TradeTablePage