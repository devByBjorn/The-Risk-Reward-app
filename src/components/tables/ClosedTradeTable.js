import React from 'react'
import { connect } from 'react-redux'
import TableHead from './TradeTableHead'
import ClosedTradeTableRow from './ClosedTradeTableRow'
import marketSearcher from '../../market-searcher/marketSearcher'
import {
  searchByMarket,
  sortByMarket,
  sortByDirection,
  sortByR,
  sortByOpened,
  sortByClosed,
  sortByOutcome,
  sortByPeriod,
  sortByExecution,
  sortByManagement
} from '../../actions/filterActions'

class ClosedTradeTable extends React.Component {
  handleSearch = (e) => this.props.searchByMarket(e.target.value)
  handleSortByMarket = (e) => this.props.sortByMarket(e.target.textContent)
  handleSortByDirection = (e) => this.props.sortByDirection(e.target.textContent)
  handleSortByOpened = (e) => this.props.sortByOpened(e.target.textContent)
  handleSortByClosed = (e) => this.props.sortByClosed(e.target.textContent)
  handleSortByPeriod = (e) => this.props.sortByPeriod(e.target.textContent)
  handleSortByExecution = (e) => this.props.sortByExecution(e.target.textContent)
  handleSortByManagement = (e) => this.props.sortByManagement(e.target.textContent)
  handleSortByOutcome = (e) => this.props.sortByOutcome(e.target.textContent)
  handleSortByR = (e) => this.props.sortByR(e.target.textContent)
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="search market"
            value={this.props.filters.searchText}
            onChange={this.handleSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByMarket}
                heading='Market'
              />
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByDirection}
                heading='Direction'
              />
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByOpened}
                heading='Opened'
              />
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByClosed}
                heading='Closed'
              />
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByPeriod}
                heading='Period'
              />
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByExecution}
                heading='Execution'
              />
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByManagement}
                heading='Management'
              />
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByOutcome}
                heading='Outcome'
              />
              <TableHead
                value={this.props.filters.sortBy}
                onClick={this.handleSortByR}
                heading='R'
              />
            </tr>
          </thead>
          <tbody>
            {this.props.trades.map((trade) => (
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
}

// Kan inte använda marketSearcher som den ser ut nu för FirstAddForm
const mapStateToProps = (state) => {
  return {
    // trades: marketSearcher(state.trades, state.filters),
    trades: state.trades,
    filters: state.filters
  }
}

const mapDispatchToProps = (dispatch) => ({
  searchByMarket: (searchText) => dispatch(searchByMarket(searchText)),
  sortByMarket: (textContent) => dispatch(sortByMarket(textContent)),
  sortByDirection: (textContent) => dispatch(sortByDirection(textContent)),
  sortByOpened: (textContent) => dispatch(sortByOpened(textContent)),
  sortByClosed: (textContent) => dispatch(sortByClosed(textContent)),
  sortByOutcome: (textContent) => dispatch(sortByOutcome(textContent)),
  sortByPeriod: (textContent) => dispatch(sortByPeriod(textContent)),
  sortByExecution: (textContent) => dispatch(sortByExecution(textContent)),
  sortByManagement: (textContent) => dispatch(sortByManagement(textContent)),
  sortByR: (textContent) => dispatch(sortByR(textContent)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ClosedTradeTable)

