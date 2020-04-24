import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import GlobalFilter from './GlobalFilter'
//import IconButton from '@material-ui/core/IconButton'
import IconButton from '../../components_style/IconButtonStyled'
import Toolbar from '@material-ui/core/Toolbar'

import Typography from '@material-ui/core/Typography'
import TypographyStyled from '../../components_style/TypogrophyStyled'

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
            <AddIcon
              fontSize="large"
            />
          </IconButton>
        </Link>
      </Tooltip>

      {numSelected > 0 ? (
        <TypographyStyled
          className={classes.title}
          color="inherit"
        >
          {numSelected} selected
        </TypographyStyled>
      ) : (
          <TypographyStyled
            className={classes.title}
            id="tableTitle">
            Add trade
          </TypographyStyled>
        )}

      <Typography
        className={classes.tableTitle}
        variant="h4"
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
              <DeleteIcon
                fontSize="large"
              />
            </IconButton>
          </Tooltip>
          <Tooltip
            title="Edit">
            <IconButton
              aria-label="edit"
            >
              <NavLink to={`/edit-trade/${data[rowId].id}`}>
                <EditIcon
                  fontSize="large"
                />
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
            <DeleteIcon
              fontSize="large"
            />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  )
}

export default TableToolbar
