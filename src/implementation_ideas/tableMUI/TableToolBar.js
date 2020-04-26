import React, { Fragment, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from "@material-ui/core/styles"
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import GlobalFilter from './TableSearchField'
import IconButton from '../../components_style/IconButtonStyled'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Tooltip from '@material-ui/core/Tooltip'
import tableToolbarStyled from '../../components_style/tableToolbarStyled'

const theme = createMuiTheme({
  overrides: {
    MuiTooltip: {
      tooltip: {
        fontSize: '1.2rem',
      }
    },
    MuiTypography: {
      typography: {
        fontFamily: 'Century Gothic, Futura, sans-serif',
      }
    }
  }
})

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
    <MuiThemeProvider theme={theme}>
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
          <Typography
            className={classes.title}
            color="inherit"
          >
            {numSelected} selected
          </Typography>
        ) : (
            <Typography
              className={classes.title}
              id="tableTitle">
              Add trade
            </Typography>
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
              className={classes.tooltip}
              title="Edit"
            >
              <IconButton
                aria-label="edit"
              >
                <NavLink className={classes.link} to={`/edit-trade/${data[rowId].id}` || '/trades'}>
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
    </MuiThemeProvider>
  )
}

export default TableToolbar
