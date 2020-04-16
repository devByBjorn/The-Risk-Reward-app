import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import TableHead from '../TradeTableHead'
import ClosedTradeTableRow from './ClosedTradeTableRow'
import marketSearcher from '../../../../market-searcher/marketSearcher'
import SearchField from '../../search-field/SearchField'
import SetDateRange from '../../table-complements/TradeTableDatePick'
import { ThMobileAndDesktop, ThOnlyDesktop } from '../TradeTableHead'

import {
  searchByMarket,
  sortByMarket,
  sortByDirection,
  sortBySetup,
  sortByR,
  sortByOpened,
  sortByClosed,
  sortByOutcome,
  sortByPeriod,
  sortByExecution,
  sortByManagement
} from '../../../../actions/filterActions'

const ClosedTradeTable = ({
  trades,
  filters,
  searchByMarket,
  sortByMarket,
  sortByDirection,
  sortBySetup,
  sortByOpened,
  sortByClosed,
  sortByPeriod,
  sortByExecution,
  sortByManagement,
  sortByOutcome,
  sortByR
}) => {
  const { sortBy, searchText } = filters
  return (
    <div className="table-container">
      <div className="navigate-tables">
        <SearchField
          placeholder="search by market"
          value={searchText}
          onChange={(e) => searchByMarket(e.target.value)}
        />
        <SetDateRange />
        <Link className="link-action" to="/add-trade">Add Trade</Link>
      </div>
      <table className="trade-table closed">
        <thead>
          <tr>
            <ThMobileAndDesktop
              className="th-btn btn-transparent mobile"
              value={sortBy}
              onClick={(e) => sortByMarket(e.target.value)}
              heading='Market'
            />
            <ThMobileAndDesktop
              className="th-btn btn-transparent mobile"
              value={sortBy}
              onClick={(e) => sortByDirection(e.target.value)}
              heading='Direction'
            />
            <ThMobileAndDesktop
              className="th-btn btn-transparent mobile"
              value={sortBy}
              onClick={(e) => sortBySetup(e.target.value)}
              heading='Setup'
            />
            <ThMobileAndDesktop
              className="th-btn btn-transparent mobile"
              value={sortBy}
              onClick={(e) => sortByR(e.target.value)}
              heading='R'
            />
            <ThOnlyDesktop
              className="th-btn btn-transparent desktop"
              value={sortBy}
              onClick={(e) => sortByOpened(e.target.value)}
              heading='Opened'
            />
            <ThOnlyDesktop
              className="th-btn btn-transparent desktop"
              value={sortBy}
              onClick={(e) => sortByClosed(e.target.value)}
              heading='Closed'
            />
            <ThOnlyDesktop
              className="th-btn btn-transparent desktop"
              value={sortBy}
              onClick={(e) => sortByOutcome(e.target.value)}
              heading='Outcome'
            />
            <th
              className="handle-th"
            >Handle</th>
          </tr>
        </thead>
        <tbody>
          {trades.map((trade) => (
            <ClosedTradeTableRow
              {...trade}
              key={trade.id}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    trades: marketSearcher(state.trades, state.filters),
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByMarket: (searchText) => dispatch(searchByMarket(searchText)),
  sortByMarket: (textContent) => dispatch(sortByMarket(textContent)),
  sortByDirection: (textContent) => dispatch(sortByDirection(textContent)),
  sortBySetup: (textContent) => dispatch(sortBySetup(textContent)),
  sortByOpened: (textContent) => dispatch(sortByOpened(textContent)),
  sortByClosed: (textContent) => dispatch(sortByClosed(textContent)),
  sortByOutcome: (textContent) => dispatch(sortByOutcome(textContent)),
  // sortByPeriod: (textContent) => dispatch(sortByPeriod(textContent)),
  // sortByExecution: (textContent) => dispatch(sortByExecution(textContent)),
  // sortByManagement: (textContent) => dispatch(sortByManagement(textContent)),
  sortByR: (textContent) => dispatch(sortByR(textContent)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClosedTradeTable)

