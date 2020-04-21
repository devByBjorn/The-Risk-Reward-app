import React from 'react'
import ClosedTradeTable from './ClosedTradeTable'
import ActiveTradeTable from './ActiveTradeTable'
import PendingTradeTable from './PendingTradeTabel'
import SetDateRange from './TradeTableDatePick'
import AppTable from '../implementation_ideas/tables/tableRender'
import Table from '../implementation_ideas/tableMUI/Table'

const TradeTablePage = () => (
  <React.Fragment>
    <h1>Trade Table Page</h1>
    <Table />
    { /*  
      <AppTable />
      <ClosedTradeTable />
    <br />
    <ActiveTradeTable />
    <br />
    <PendingTradeTable />
 <br />*/}
  </React.Fragment>
)

export default TradeTablePage