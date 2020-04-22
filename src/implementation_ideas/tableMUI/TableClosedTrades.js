import React, { useEffect, useState, useRef, Fragment, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { closedTradeSearch } from '../../market-searcher/marketSearcher'
import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './EnhancedTable'


const TableClosedTrades = ({ trades }) => {

  const [data, setData] = useState([])
  const [skipPageReset, setSkipPageReset] = useState(false)
  const fetchIdRef = useRef(0)

  console.log('ALL', trades)
  console.log('CLOSED', trades.filter((trade) => trade.status === 'closed'))

  const columns = useMemo(
    () => [
      {
        Header: 'Market',
        accessor: 'market',
        className: 'market-td'
      }, {
        Header: 'Direction',
        accessor: 'direction'
      },
      {
        Header: 'Setup',
        accessor: 'setup',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'R',
        accessor: 'rewardToRisk'
      },
      {
        Header: 'Opened',
        accessor: 'opened',
      },
      {
        Header: 'Closed',
        accessor: 'closed'
      },
      {
        Header: 'Outcome',
        accessor: 'outcome',
      },
    ],
    []
  )

  useEffect(() => {
    setData(trades)
  }, [trades])

  const fetchData = useCallback(() => {
    const fetchId = ++fetchIdRef.current
    if (fetchId === fetchIdRef.current) {
      setData(trades)
    }
  }, [])

  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  return (
    <div>
      <CssBaseline />
      <h2>Closed Trades</h2>
      <EnhancedTable
        columns={columns}
        data={data}
        fetchData={fetchData}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  trades: closedTradeSearch(state.trades, state.filters)
})

export default connect(mapStateToProps)(TableClosedTrades)