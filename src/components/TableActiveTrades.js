import React, { useEffect, useState, useRef, Fragment, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import TableEnhanced from './TableEnhanced'

const TableActiveTrades = ({ trades }) => {
  const [data, setData] = useState([])
  const [skipPageReset, setSkipPageReset] = useState(false)
  const fetchIdRef = useRef(0)

  const tableName = 'Active Trades'

  const formDate = (milliSeconds) => {
    const date = new Date(milliSeconds)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const fullYear = date.getFullYear()
    const month = months[date.getMonth()]
    const dayDate = date.getDate()

    return `${dayDate} ${month}, ${fullYear}`
  }

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
        Header: 'Entry',
        accessor: 'entry',
      }, {
        Header: 'Stop',
        accessor: 'stop',
      }, {
        Header: 'Target',
        accessor: 'target',
      },
      {
        Header: 'Risk',
        accessor: 'risk',
        Footer: 'Potential Risk: '
      },
      {
        Header: 'Reward',
        accessor: 'reward',
      },
      {
        Header: 'Opened',
        accessor: 'opened',
        Cell: (props) => {
          const customDate = formDate(props.value)
          return (
            <span>{customDate}</span>
          )
        }
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
      <TableEnhanced
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
  trades: state.trades.filter((trade) => trade.status === 'active')
})

export default connect(mapStateToProps)(TableActiveTrades)