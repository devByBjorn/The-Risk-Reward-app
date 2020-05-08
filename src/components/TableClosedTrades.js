import React, { useEffect, useState, useRef, Fragment, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { closedTradeSearch } from '../market-searcher/marketSearcher'
import TableEnhanced from './TableEnhanced'

const TableClosedTrades = ({ trades }) => {
  const [data, setData] = useState([])
  const [skipPageReset, setSkipPageReset] = useState(false)
  const fetchIdRef = useRef(0)

  const tableName = 'Closed Trades'

  const formDate = (milliSeconds) => {
    const date = new Date(milliSeconds)
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
      'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const fullYear = date.getFullYear()
    const month = months[date.getMonth()]
    const dayDate = date.getDate()

    return `${dayDate} ${month}, ${fullYear}`
  }

  const getOutcomeBorder = (value) => {
    let border

    switch (value) {
      case 'win':
        return border = '8px solid #d1eec1'
      case 'loss':
        return border = '8px solid #fda3a3'
      case 'scratch':
        return border = '8px solid #ffdb99'
      default:
        return border = 'none'
    }
  }

  const columns = useMemo(
    () => [
      {
        Header: 'Market',
        accessor: 'market',
      }, {
        Header: 'Direction',
        accessor: 'direction'
      },
      {
        Header: 'Setup',
        accessor: 'setup',
      },
      {
        Header: 'R/R',
        accessor: 'rewardToRisk'
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
      {
        Header: 'Closed',
        accessor: 'closed',
        Cell: (props) => {
          const customDate = formDate(props.value)
          return (
            <span>{customDate}</span>
          )
        }
      },
      {
        Header: 'Outcome',
        accessor: 'outcome',
        /*getProps: (state, rowInfo, column) => {
          alert(rowInfo)
          const borderLeft = getOutcomeBorder(rowInfo.row.outcome)
          return {
            style: {
              borderLeft
            }
          }
        }*/
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
    </div>
  )
}

const mapStateToProps = (state) => ({
  trades: closedTradeSearch(state.trades, state.filters)
})

export default connect(mapStateToProps)(TableClosedTrades)