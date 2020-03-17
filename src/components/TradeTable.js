import React from 'react'
import { connect } from 'react-redux'
import TableHead from './TradeTableHead'
import TradeTableRow from './TradeTableRow'
import marketSearcher from '../market-searcher/marketSearcher'
import { searchByMarket, sortByMarket, sortByDirection, sortByR, sortByOpened, sortByClosed, sortByOutcome, sortByPeriod } from '../actions/filterActions'

// Make button into one component here

const TradeTable = (props) => (
  <div>
    <div>
      <input
        type="text"
        placeholder="search market"
        value={props.filters.searchText}
        onChange={(e) => {
          props.dispatch(searchByMarket(e.target.value))
        }}
      />
    </div>
    <table>
      <thead>
        <tr>
          <TableHead
            value={props.filters.sortBy}
            onClick={(e) => props.dispatch(sortByMarket(e.target.textContent))}
            heading='Market'
          />
          <TableHead
            value={props.filters.sortBy}
            onClick={(e) => props.dispatch(sortByDirection(e.target.textContent))}
            heading='Direction'
          />
          <TableHead
            value={props.filters.sortBy}
            onClick={(e) => props.dispatch(sortByOpened(e.target.textContent))}
            heading='Opened'
          />
          <TableHead
            value={props.filters.sortBy}
            onClick={(e) => props.dispatch(sortByClosed(e.target.textContent))}
            heading='Closed'
          />
          <TableHead
            value={props.filters.sortBy}
            onClick={(e) => props.dispatch(sortByPeriod(e.target.textContent))}
            heading='Period'
          />
          <TableHead
            value={props.filters.sortBy}
            onClick={(e) => props.dispatch(sortByOutcome(e.target.textContent))}
            heading='Outcome'
          />
          <TableHead
            value={props.filters.sortBy}
            onClick={(e) => props.dispatch(sortByR(e.target.textContent))}
            heading='R'
          />
        </tr>
      </thead>
      <tbody>
        {props.trades.map((trade) => (
          <TradeTableRow
            {...trade}
            key={trade.id}
          />
        ))}
      </tbody>
    </table>
  </div>
)

const mapStateToProps = (state) => {
  return {
    trades: marketSearcher(state.trades, state.filters),
    filters: state.filters
  }
}

export default connect(mapStateToProps)(TradeTable)


