import React from 'react'
import { connect } from 'react-redux'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import SearchIcon from '@material-ui/icons/Search'

import marketSearcher from '../../market-searcher/marketSearcher'
import { searchByMarket } from '../../actions/filterActions'

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}))

const GlobalFilter = ({
  filters,
  searchByMarket,
  trades,
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const classes = useStyles()
  const count = preGlobalFilteredRows.length
  const { sortBy, searchText } = filters

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={searchText}
        onChange={(e) => searchByMarket(e.target.value)}
        placeholder={`${count} trades...`}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

GlobalFilter.propTypes = {
  preGlobalFilteredRows: PropTypes.array.isRequired,
  globalFilter: PropTypes.string.isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  searchByMarket: (searchText) => dispatch(searchByMarket(searchText)),
})

const mapStateToProps = (state) => {
  return {
    trades: marketSearcher(state.trades, state.filters),
    filters: state.filters
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFilter)
