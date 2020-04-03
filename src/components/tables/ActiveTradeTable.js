import React from 'react'
import { connect } from 'react-redux'
import TableHead from './TradeTableHead'
import ActiveTableRow from './ActiveTableRow'
import marketSearcher from '../../market-searcher/marketSearcher'

class ActiveTradeTable extends React.Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <TableHead
                heading='Market'
              />
              <TableHead
                heading='Direction'
              />
              <TableHead
                heading='Entry'
              />
              <TableHead
                heading='Stop'
              />
              <TableHead
                heading='Target'
              />
              <TableHead
                heading='Opened'
              />
              <TableHead
                heading='-R'
              />
              <TableHead
                heading='+R'
              />
            </tr>
          </thead>
          <tbody>
            {this.props.trades.map((trade) => (
              trade.status === 'active'
                ? (<ActiveTableRow
                  {...trade}
                  key={trade.id}
                />)
                : false
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
    trades: state.trades,
  }
}

export default connect(mapStateToProps)(ActiveTradeTable)