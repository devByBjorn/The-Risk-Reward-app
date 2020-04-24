import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import TableClosedTrades from './TableClosedTrades'
import TableActiveTrades from './TableActiveTrades'
import TablePendingTrades from './TablePendingTrades'
import styled from 'styled-components'

const styles = {
  tablist: {
    display: 'flex',
    background: 'transparent',
    border: 'none',
    listStyleType: 'none',
    marginBottom: '0',
    maxWidth: '100rem',
    margin: '0 auto',
    padding: '10px 0',

  },
  tab: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    width: '5rem',
  }
}



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