import React from 'react'
import searchFieldStyle from './GlobalFilterStyle'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'

const GlobalFilter = ({
  globalFilter,
  setGlobalFilter,
  preGlobalFilteredRows,
}) => {
  const classes = searchFieldStyle()
  const count = preGlobalFilteredRows.length

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        value={globalFilter || ''}
        onChange={e => {
          setGlobalFilter(e.target.value || undefined)
        }}
        placeholder={count > 1 || count === 0 ? `${count} trades...` : `${count} trade`}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  )
}

export default GlobalFilter
