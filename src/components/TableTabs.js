import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import TableClosedTrades from './TableClosedTrades'
import TableActiveTrades from './TableActiveTrades'
import TablePendingTrades from './TablePendingTrades'

const TableTabs = () => (
  <Tabs>
    <TabList>
      <Tab>Closed</Tab>
      <Tab>Active</Tab>
      <Tab>Pending</Tab>
    </TabList>

    <TabPanel>
      <TableClosedTrades />
    </TabPanel>
    <TabPanel>
      <TableActiveTrades />
    </TabPanel>
    <TabPanel>
      <TablePendingTrades />
    </TabPanel>
  </Tabs>
)

export default TableTabs