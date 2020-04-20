import React, { useEffect, useState, useRef, Fragment, useMemo, useCallback } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useTable, usePagination } from 'react-table'
import { EditIcon, TrashIcon } from '../../icons/IconsComponents'
import { deleteTrade } from '../../actions/tradeActions'
import marketSearcher from '../../market-searcher/marketSearcher'
import SearchField from '../../components/trades/search-field/SearchField'
import SetDateRange from '../../components/trades/table-complements/TradeTableDatePick'
import {
  searchByMarket,
  sortByMarket,
  sortByDirection,
  sortBySetup,
  sortByR,
  sortByOpened,
  sortByClosed,
  sortByOutcome,
  sortByPeriod,
  sortByExecution,
  sortByManagement
} from '../../actions/filterActions'

import Pagination from './tablePagination'

const Table = ({
  columns,
  data,
  fetchData,
  loading,
  pageCount: controlledPageCount,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
      manualPagination: true,
      pageCount: controlledPageCount,
    },
    usePagination
  )

  useEffect(() => {
    fetchData({ pageIndex, pageSize })
  }, [fetchData, pageIndex, pageSize])

  return (
    <Fragment>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  /* onClick handler on each heading*/
                  onClick={() => console.log('column', column)}
                  {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
          <tr>
            {loading ? (
              <td colSpan="10000">Loading...</td>
            ) : (
                <td colSpan="10000">
                  Showing {page.length} of ~{controlledPageCount * pageSize}{' '}
            results
                </td>
              )}
          </tr>
        </tbody>
      </table>

      <Pagination
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        pageCount={pageCount}
        gotoPage={gotoPage}
        nextPage={nextPage}
        previousPage={previousPage}
        setPageSize={setPageSize}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />

    </Fragment>
  )
}

const mapStateToProps = (state) => ({
  trades: state.trades
})
export default connect(mapStateToProps)(Table)


