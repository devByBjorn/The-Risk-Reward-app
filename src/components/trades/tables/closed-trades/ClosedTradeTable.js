import React from 'react'
import { connect } from 'react-redux'
import TableHead from '../TradeTableHead'
import ClosedTradeTableRow from './ClosedTradeTableRow'
import marketSearcher from '../../../../market-searcher/marketSearcher'
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
    <div>
      <div>
        <input
          type="text"
          placeholder="search market"
          value={searchText}
          onChange={(e) => searchByMarket(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <TableHead
              value={sortBy}
              onClick={(e) => sortByMarket(e.target.value)}
              heading='Market'
            />
            <TableHead
              value={sortBy}
              onClick={(e) => sortByDirection(e.target.value)}
              heading='Direction'
            />
            <TableHead
              value={sortBy}
              onClick={(e) => sortBySetup(e.target.value)}
              heading='Setup'
            />
            <TableHead
              value={sortBy}
              onClick={(e) => sortByOpened(e.target.value)}
              heading='Opened'
            />
            <TableHead
              value={sortBy}
              onClick={(e) => sortByClosed(e.target.value)}
              heading='Closed'
            />
            {/*    <TableHead
              value={sortBy}
              onClick={(e) => sortByPeriod(e.target.value)}
              heading='Period'
            />
            <TableHead
              value={sortBy}
              onClick={(e) => sortByExecution(e.target.value)}
              heading='Execution'
            />
            <TableHead
              value={sortBy}
              onClick={(e) => sortByManagement(e.target.value)}
              heading='Management'
        />*/}
            <TableHead
              value={sortBy}
              onClick={(e) => sortByOutcome(e.target.value)}
              heading='Outcome'
            />
            <TableHead
              value={sortBy}
              onClick={(e) => sortByR(e.target.value)}
              heading='R'
            />
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

