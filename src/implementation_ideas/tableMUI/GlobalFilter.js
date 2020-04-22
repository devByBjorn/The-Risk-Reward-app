import React from 'react'
import { connect } from 'react-redux'
import searchFieldStyle from './GlobalFilterStyle'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import { searchByMarket } from '../../actions/filterActions'

const GlobalFilter = ({
  filters,
  searchByMarket,
  data,
  setData,
  trades,
  preGlobalFilteredRows,
}) => {
  const classes = searchFieldStyle()
  const count = preGlobalFilteredRows.length
  const { searchText } = filters

  const searchMarket = (data, searchValue) =>
    data.filter((d) => d.market.toLowerCase().includes(searchValue))

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        onChange={(e) => searchMarket(data, e.target.value)}
        placeholder='Search by market'
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}
/*
GlobalFilter.propTypes = {
  preGlobalFilteredRows: PropTypes.array.isRequired,
  globalFilter: PropTypes.string.isRequired,
  setGlobalFilter: PropTypes.func.isRequired,
}
*/

const mapDispatchToProps = (dispatch) => ({
  searchByMarket: (searchText) => dispatch(searchByMarket(searchText)),
})

const mapStateToProps = (state) => ({
  filters: state.filters
})

export default connect(mapStateToProps, mapDispatchToProps)(GlobalFilter)
