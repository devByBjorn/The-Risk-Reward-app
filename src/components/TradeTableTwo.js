import React from 'react'
import { connect } from 'react-redux'
import TradeTableRow from './TradeTableRow'
import { sortString, reSortString } from '../sorters/stringSort'
import { sortNum, reSortNum } from '../sorters/numSort'
// import TableSort from 'tablesort'

class TradeTableTwo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sortString: false,
      sortNum: false,
      trades: props.trades,
      filters: props.filters,
    }
  }

  sortTableRowString = (e) => {
    const sort = this.state.sortString
    const trades = this.state.trades
    const tradesProp = e.target.textContent.toLowerCase()

    if (!sort) {
      switch (tradesProp) {
        case 'market':
          this.setState(() => ({ trades: sortString(trades, tradesProp) }))
        case 'direction':
          this.setState(() => ({ trades: sortString(trades, tradesProp) }))
        case 'outcome':
          this.setState(() => ({ trades: sortString(trades, tradesProp) }))
      }
    } else {
      switch (tradesProp) {
        case 'market':
          this.setState(() => ({ trades: reSortString(trades, tradesProp) }))
        case 'direction':
          this.setState(() => ({ trades: reSortString(trades, tradesProp) }))
        case 'outcome':
          this.setState(() => ({ trades: reSortString(trades, tradesProp) }))
      }
    }
    this.setState(() => ({ sortString: !sort }))
  }

  sortTableRowNum = (e) => {
    const sort = this.state.sortNum
    const trades = this.state.trades
    const tradesProp = e.target.textContent.toLowerCase()

    if (!sort) {
      switch (tradesProp) {
        case 'opened':
          this.setState(() => ({ trades: sortNum(trades, tradesProp) }))
        case 'closed':
          this.setState(() => ({ trades: sortNum(trades, tradesProp) }))
        case 'period':
          this.setState(() => ({ trades: sortNum(trades, tradesProp) }))
        case 'r':
          this.setState(() => ({ trades: sortNum(trades, 'riskReward') }))
      }
    } else {
      switch (tradesProp) {
        case 'opened':
          this.setState(() => ({ trades: reSortNum(trades, tradesProp) }))
        case 'closed':
          this.setState(() => ({ trades: reSortNum(trades, tradesProp) }))
        case 'period':
          this.setState(() => ({ trades: reSortNum(trades, tradesProp) }))
        case 'r':
          this.setState(() => ({ trades: reSortNum(trades, 'riskReward') }))
      }
    }

    this.setState(() => ({ sortNum: !sort }))
  }

  searchByMarket = (e) => {
    const trades = this.props.trades
    const searchText = e.target.value
    const searched = trades.filter((trade) => trade.market.toLowerCase()
      .includes(searchText.toLowerCase()))

    this.setState(() => ({ trades: searched }))
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="search market"
          value={this.props.searchText}
          onChange={this.searchByMarket}
        />
        <table>
          <thead>
            <tr>
              <th>
                <button
                  className="th-btn"
                  onClick={this.sortTableRowString}
                >Market</button>
              </th>
              <th>
                <button
                  className="th-btn"
                  onClick={this.sortTableRowString}
                >Direction</button>
              </th>
              <th>
                <button
                  className="th-btn"
                  onClick={this.sortTableRowNum}
                >Opened</button>
              </th>
              <th>
                <button
                  className="th-btn"
                  onClick={this.sortTableRowNum}
                >Closed</button>
              </th>
              <th>
                <button
                  className="th-btn"
                  onClick={this.sortTableRowNum}
                >Period</button>
              </th>
              <th>
                <button
                  className="th-btn"
                  onClick={this.sortTableRowString}
                >OutCome</button>
              </th>
              <th>
                <button
                  className="th-btn"
                  onClick={this.sortTableRowNum}
                >R</button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.trades.map((trade) => (
              <TradeTableRow
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

const mapStateToProps = (state) => {
  return {
    trades: state.trades,
    filters: state.filters
  }
}

export default connect(mapStateToProps)(TradeTableTwo)


