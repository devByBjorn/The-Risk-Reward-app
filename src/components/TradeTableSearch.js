import React from 'react'
// ERROR: wrote import React from 'React' first...upper case on 'React' caused the error: 

/* There are multiple modules with names that only differ in casing.
This can lead to unexpected behavior when compiling on a filesystem with other case-semantic.
*/
import { connect } from 'react-redux'
import { searchByMarket } from '../actions/filterActions'

const TradeTableSearch = (props) => (
  <div>
    {console.log(props.filters)}
    <input type="text"
      value={props.filters.searchText}
      placeholder="search market"
      onChange={(e) => props.dispatch(searchByMarket(e.target.value))}
    />
  </div>
)

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(TradeTableSearch)