import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import GlobalFilter from './GlobalFilter'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import tableToolbarStyle from './TableToolBarStyle'

const TableToolbar = props => {
  const classes = tableToolbarStyle()
  const {
    data,
    setData,
    filters,
    numSelected,
    deleteTrades,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = props

  return (

    <Toolbar
      style={{ backgroundColor: '#eee' }}
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
      >{data.length > 1 || data.length === 0
        ? `${data.length} trades`
        : `${data.length} trade`}
      </Typography>

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={deleteTrades}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
          <GlobalFilter
            data={data}
            setData={setData}
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={filters}
            setGlobalFilter={setGlobalFilter}
          />
        )}
    </Toolbar>
  )
}

/*TableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  addUserHandler: PropTypes.func.isRequired,
  deleteUserHandler: PropTypes.func.isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
  preGlobalFilteredRows: PropTypes.array.isRequired,
  globalFilter: PropTypes.string.isRequired,
}*/

const mapStateToProps = (state) => ({
  filter: state.filters
})

export default connect(mapStateToProps)(TableToolbar)
