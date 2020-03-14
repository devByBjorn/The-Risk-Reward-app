import React from 'react'
import { connect } from 'react-redux'
import TradeTableRow from './TradeTableRow'
import marketSearcher from '../market-searcher/marketSearcher'
import { searchByMarket, sortByMarket, sortByDirection, sortByR, sortByOpened, sortByClosed, sortByOutcome } from '../actions/filterActions'

const TradeTable = (props) => (
  <div>
    <input
      type="text"
      placeholder="search market"
      value={props.filters.searchText}
      onChange={(e) => {
        props.dispatch(searchByMarket(e.target.value))
      }}
    />
    <table>
      <thead>
        <tr>
          <th>
            <button
              className="th-btn"
              value={props.filters.sortBy}
              onClick={(e) => props.dispatch(sortByMarket(e.target.textContent))}
            >Market</button>
          </th>
          <th>
            <button
              className="th-btn"
              value={props.filters.sortBy}
              onClick={(e) => props.dispatch(sortByDirection(e.target.textContent))}
            >Direction</button>
          </th>
          <th>
            <button
              className="th-btn"
              value={props.filters.sortBy}
              onClick={(e) => props.dispatch(sortByOpened(e.target.textContent))}
            >Opened</button>
          </th>
          <th>
            <button
              className="th-btn"
              value={props.filters.sortBy}
              onClick={(e) => props.dispatch(sortByClosed(e.target.textContent))}
            >Closed</button></th>
          <th>
            <button
              className="th-btn"
              value={props.filters.sortBy}
              onClick={(e) => props.dispatch(sortByPeriod(e.target.textContent))}
            >Period</button>
          </th>
          <th>
            <button
              className="th-btn"
              value={props.filters.sortBy}
              onClick={(e) => props.dispatch(sortByOutcome(e.target.textContent))}
            >OutCome</button>
          </th>
          <th>
            <button
              className="th-btn"
              value={props.filters.sortBy}
              onClick={(e) => props.dispatch(sortByR(e.target.textContent))}
            >R</button>
          </th>
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


