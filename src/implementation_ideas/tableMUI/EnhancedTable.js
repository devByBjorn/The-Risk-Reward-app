import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import MaUTable from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'

import TableCell from '@material-ui/core/TableCell'
import TableCellHead from '../../components_style/TableHeadStyled'

import TableContainer from '../../components_style/TableContainerStyled'
import TableFooter from '@material-ui/core/TableFooter'

import TableHead from '@material-ui/core/TableHead'
//import TableHead from '../../components_style/TableHeadStyled'

import TablePagination from '@material-ui/core/TablePagination'

import TablePaginationActions from './TablePaginationActions'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableToolbar from './TableToolbar'
import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table'
//import EditableCell from './EditableCell'
import IndeterminateCheckbox from './IndeterminateCheckbox'
import { deleteFirebaseTrade, editFirebaseTrade } from '../../actions/tradeActions'


// Set our editable cell renderer as the default Cell renderer
// const defaultColumn = {
//   Cell: EditableCell,
// }

const EnhancedTable = ({
  tableName,
  deleteFirebaseTrade,
  columns,
  data,
  setData,
  fetchData,
  updateMyData,
  skipPageReset,
}) => {
  const {
    getTableProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter },
  } = useTable(
    {
      columns,
      data,
      //defaultColumn,
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    hooks => {
      hooks.allColumns.push(columns => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row, data, cell }) => {
            return (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            )
          },
        },
        ...columns,
      ])
    }
  )

  const getOutcome = (value) => {

    let backgroundColor

    switch (value) {
      case 'win':
        return backgroundColor = '#d1eec1'
      case 'loss':
        return backgroundColor = '#fda3a3'
      case 'scratch':
        return backgroundColor = '#ffdb99'
      default:
        return backgroundColor = '#fff'
    }
  }

  //
  useEffect(() => {
    fetchData()
  }, [fetchData])
  //
  const handleChangePage = (event, newPage) => {
    gotoPage(newPage)
  }
  //
  const handleChangeRowsPerPage = event => {
    setPageSize(Number(event.target.value))
  }
  //
  const removeByIndexs = (array, indexs) =>
    array.filter((_, i) => !indexs.includes(i))
  //
  const removeFirebaseByIndexs = (array, indexs) =>
    array.filter((_, i) => indexs.includes(i))
  //
  const deleteTrades = event => {
    const tradesToDelete = removeFirebaseByIndexs(
      data,
      Object.keys(selectedRowIds).map(x => parseInt(x, 10))
    ).forEach((trade) =>
      deleteFirebaseTrade({ id: trade.id }))

    const tradesToKeep = removeByIndexs(
      data,
      Object.keys(selectedRowIds).map(x => parseInt(x, 10))
    )
    return tradesToDelete && setData(tradesToKeep)
  }
  //
  return (
    <TableContainer>
      <TableToolbar
        tableName={tableName}
        data={data}
        setData={setData}
        rowId={Object.keys(selectedRowIds).join('')}
        numSelected={Object.keys(selectedRowIds).length}
        deleteTrades={deleteTrades}
        preGlobalFilteredRows={preGlobalFilteredRows}
        setGlobalFilter={setGlobalFilter}
        globalFilter={globalFilter}
      />
      <MaUTable {...getTableProps()} stickyHeader aria-label="sticky table">
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCellHead
                  {...(column.id === 'selection'
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                >
                  {column.render('Header')}
                  {column.id !== 'selection' ? (
                    <TableSortLabel
                      active={column.isSorted}
                      // react-table has a unsorted state which is not treated here
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  ) : null}
                </TableCellHead>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  const color = getOutcome(cell.value)

                  return (
                    <TableCell
                      style={{ backgroundColor: color }}
                      {...cell.getCellProps()}>
                      {cell.render('Cell')}
                      {console.log(cell.value)}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>

        <TableFooter>
          <TableRow
          >
            <TablePagination
              colspan={999}
              rowsPerPageOptions={[
                5,
                10,
                25,
                { label: 'All', value: data.length },
              ]}
              colSpan={3}
              count={data.length}
              rowsPerPage={pageSize}
              page={pageIndex}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </MaUTable>
    </TableContainer>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteFirebaseTrade: (id) => dispatch(deleteFirebaseTrade(id)),
  editFirebaseTrade: (id, trade) => dispatch(editFirebaseTrade(id, trade))
})

export default connect(null, mapDispatchToProps)(EnhancedTable)