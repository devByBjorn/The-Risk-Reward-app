import React from 'react'
import { connect } from 'react-redux'

// Display stats regarding to R - total R / avarage R / highest R / lowest R
// Takes stats from TradeTableRows for calculation

class TradeTableStats extends React.Component {
  constructor(props) {
    super(props)
  }
  getTotalR = (trades) =>
    trades.reduce((total, trade) => total + trade.rewardToRisk, 0)
  getAvarageR = (trades) =>
    trades.reduce((total, trade) => (total + trade.rewardToRisk), 0) / trades.length
  getHighestR = (trades) =>
    trades.sort((a, b) => b.rewardToRisk > a.rewardToRisk ? 1 : -1)[0].rewardToRisk
  getLowestR = (trades) =>
    trades.sort((a, b) => a.rewardToRisk > b.rewardToRisk ? 1 : -1)[0].rewardToRisk
  render() {
    return (
      <div>
        <div>Total Trades: {this.props.trades.length > 0 ? <p>{this.props.trades.length} </p> : 0}</div>
        <div>
          Total R:
          {this.getTotalR(this.props.trades)}
        </div>
        <div>
          Avarage R:
          {this.props.trades.length ? this.getAvarageR(this.props.trades) : 0}
        </div>
        <div>
          Highest R:
          {this.props.trades.length ? this.getHighestR(this.props.trades) : 0}
        </div>
        <div>
          Lowest R:
          {this.props.trades.length ? this.getLowestR(this.props.trades) : 0}
        </div>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  return {
    trades: state.trades
  }
}

export default connect(mapStateToProps)(TradeTableStats)