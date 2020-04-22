import React, { useEffect, useState, useRef, Fragment, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { pendingTradeSearch } from '../../market-searcher/marketSearcher'
import CssBaseline from '@material-ui/core/CssBaseline'
import EnhancedTable from './EnhancedTable'


const TablePendingTrades = ({ trades }) => {
  const [data, setData] = useState([])
  const [skipPageReset, setSkipPageReset] = useState(false)
  const fetchIdRef = useRef(0)

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
        Header: '-R',
        accessor: 'negativeR'
      },
      {
        Header: 'R',
        accessor: 'positiveR'
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
      <h2>Pending Trades</h2>
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
  trades: pendingTradeSearch(state.trades, state.filters)
})

export default connect(mapStateToProps)(TablePendingTrades)