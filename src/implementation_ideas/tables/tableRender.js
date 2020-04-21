import React, { useEffect, useState, useRef, Fragment, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import Table from './table'
import Styles from './tableStyle'
import { deleteFirebaseTrade } from '../../actions/tradeActions'
import { TrashIcon, EditIcon } from '../../icons/IconsComponents'
import { Link } from 'react-router-dom'


const AppTable = ({ trades, dispatch }) => {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [pageCount, setPageCount] = useState(0)
  const [skipPageReset, setSkipPageReset] = useState(false)
  const fetchIdRef = useRef(0)

  const findTradeId = (row) => {
    const trade = row.data.find((trade, i) => {
      i = row.row.id
      return trade.id === row.page[i].original.id
    })
    return trade.id
  }

  const columns = useMemo(() => [
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
    }, {
      Header: 'Edit',
      id: 'edit',
      accessor: str => 'edit',
      Cell: (row) => (
        <Link
          to={`/edit-trade/${findTradeId(row)}`}
        > <EditIcon
            className="edit-icon icon"
          /></Link>
      )
    },
    {
      Header: 'Delete',
      id: 'delete',
      accessor: str => 'delete',
      Cell: (row) => (
        <button
          onClick={() => {
            const id = findTradeId(row)
            dispatch(deleteFirebaseTrade({ id }))
            const data = row.data.filter((d) => d.id !== id)
            setData(data)
          }}
        >
          <TrashIcon className="trashcan-icon icon" />
        </button>
      )
    },
  ], [])

  const fetchData = useCallback(({ pageSize, pageIndex }) => {
    const fetchId = ++fetchIdRef.current
    setLoading(true)
    if (fetchId === fetchIdRef.current) {
      const startRow = pageSize * pageIndex
      const endRow = startRow + pageSize
      setData(trades.slice(startRow, endRow))
      setPageCount(Math.ceil(trades.length / pageSize))
      setLoading(false)
    }
  }, [])

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        fetchData={fetchData}
        loading={loading}
        pageCount={pageCount}
        skipPageReset={skipPageReset}
      />
    </Styles>
  )
}


const mapStateToProps = (state) => ({
  trades: state.trades
})

export default connect(mapStateToProps)(AppTable)