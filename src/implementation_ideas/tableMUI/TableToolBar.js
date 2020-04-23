import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import GlobalFilter from './GlobalFilter'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import tableToolbarStyled from '../../components_style/tableToolbarStyled'

const TableToolbar = props => {
  const classes = tableToolbarStyled()
  const {
    tableName,
    data,
    setData,
    numSelected,
    rowId,
    deleteTrades,
    preGlobalFilteredRows,
    setGlobalFilter,
    globalFilter
  } = props

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <Tooltip title="Add">
        <Link to="/add-trade">
          <IconButton aria-label="add">
            <AddIcon />
          </IconButton>
        </Link>
      </Tooltip>

      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
        >
          {numSelected} selected
        </Typography>
      ) : (
          <Typography
            className={classes.title}
            variant="h6"
            id="tableTitle">
            Add trade
          </Typography>
        )}

      <Typography
        className={classes.title}
        variant="h5"
        id="tableMainTitle"
      >{tableName}
      </Typography>

      {numSelected === 0 && (
        <GlobalFilter
          data={data}
          setData={setData}
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      )}

      {numSelected > 0 && numSelected < 2 && (
        <Fragment>
          <Tooltip title="Delete">
            <IconButton
              aria-label="delete"
              onClick={deleteTrades}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Edit">
            <IconButton
              aria-label="edit">
              <NavLink to={`/edit-trade/${data[rowId].id}`}>
                <EditIcon />
              </NavLink>
            </IconButton>
          </Tooltip>
        </Fragment>
      )}
      {numSelected > 1 && (
        <Tooltip title="Delete">
          <IconButton
            aria-label="delete"
            onClick={deleteTrades}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}

export default TableToolbar
