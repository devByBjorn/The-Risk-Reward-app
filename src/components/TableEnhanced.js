import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import TableBody from '@material-ui/core/TableBody'
import TableFooter from '@material-ui/core/TableFooter'
import TableHead from '@material-ui/core/TableHead'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import TableRow from '@material-ui/core/TableRow'
import TablePaginationStyled from '../components_style/TablePaginationStyled'
import TableCellStyled from '../components_style/TableCellStyled'
import TableContainerStyled from '../components_style/TableContainerStyled'
import TableStyled from '../components_style/TableStyled'
import TablePaginationActions from './TablePaginationActions'
import TableToolbar from './TableToolBar'
import TableCheckBox from './TableCheckbox'

//import DeleteIcon from '@material-ui/icons/Delete'
//import EditIcon from '@material-ui/icons/Edit'
//import IconButton from '../components_style/IconButtonStyled'


import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table'
import { deleteFirebaseTrade, editFirebaseTrade } from '../actions/tradeActions'


const useStyles = makeStyles({
  rowBody: {
    transition: 'all 0.3s ease',
    '&:hover': {
      background: '#e0e0e0',
      boxShadow: '1px 1px 4px 2px rgba(0,0,0,0.75)',
    }
  },
})

export const EnhancedTable = ({
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
      autoResetPage: !skipPageReset,
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
              <TableCheckBox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row, data, cell }) => {
            return (
              <div>
                <TableCheckBox {...row.getToggleRowSelectedProps()} />
              </div>
            )
          },
        },
        /*{
          id: 'handle',
          Cell: ({ row, data, cell }) => {
            return (
              <div>
                <IconButton
                  aria-label="delete">
                  <DeleteIcon fontSize="small" />
                </IconButton>
                <IconButton
                  aria-label="edit"
                //href={`/edit-trade/${data[rowId].id}`}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </div>
            )
          },
        },*/
        ...columns,
      ])
    }
  )
  const classes = useStyles()
  //
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
    <TableContainerStyled>
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
      <TableStyled {...getTableProps()} stickyHeader aria-label="sticky table">
        <TableHead>
          {headerGroups.map(headerGroup => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <TableCellStyled
                  {...(column.id === 'selection'
                    ? column.getHeaderProps()
                    : column.getHeaderProps(column.getSortByToggleProps()))}
                >
                  {column.render('Header')}
                  {column.id !== 'selection' ? (
                    <TableSortLabel
                      active={column.isSorted}
                      direction={column.isSortedDesc ? 'desc' : 'asc'}
                    />
                  ) : null}
                </TableCellStyled>
              ))}
            </TableRow>
          ))}
        </TableHead>

        <TableBody>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow className={classes.rowBody}
                {...row.getRowProps()}>
                {row.cells.map(cell => {
                  // can't get getProps to work in header/accesor
                  const borderLeft = getOutcomeBorder(cell.value)
                  return (
                    <TableCellStyled
                      style={cell.column.Header === 'Outcome' ? { borderLeft } : {}}
                      {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCellStyled>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>

        <TableFooter>
          <TableRow
          >
            <TablePaginationStyled
              colSpan={999}
              style={{ fontSize: '1.2rem' }}
              rowsPerPageOptions={[
                5,
                10,
                25,
                { label: 'All', value: data.length },
              ]}
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
      </TableStyled>
    </TableContainerStyled>
  )
}

const mapDispatchToProps = (dispatch) => ({
  deleteFirebaseTrade: (id) => dispatch(deleteFirebaseTrade(id)),
  editFirebaseTrade: (id, trade) => dispatch(editFirebaseTrade(id, trade))
})

export default connect(null, mapDispatchToProps)(EnhancedTable)