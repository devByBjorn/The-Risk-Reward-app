import React, { useEffect, useState, useRef, Fragment, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { activeTradeSearch } from '../../market-searcher/marketSearcher'
import EnhancedTable from './EnhancedTable'


const TableActiveTrades = ({ trades }) => {
  const [data, setData] = useState([])
  const [skipPageReset, setSkipPageReset] = useState(false)
  const fetchIdRef = useRef(0)

  const tableName = 'Active Trades'

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
      {
        Header: 'Opened',
        accessor: 'opened',
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
    <div style={{ maxWidth: '100rem', margin: `5rem auto` }} >
      <EnhancedTable
        tableName={tableName}
        columns={columns}
        data={data}
        fetchData={fetchData}
        setData={setData}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div >
  )
}

const mapStateToProps = (state) => ({
  trades: activeTradeSearch(state.trades, state.filters)
})

export default connect(mapStateToProps)(TableActiveTrades)