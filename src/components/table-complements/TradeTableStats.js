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
        <h4>Total Trades:{this.props.trades.length}</h4>
        <ul>
          <li>Total R:
          {this.getTotalR(this.props.trades)}</li>
          <li> Avarage R:
          {this.props.trades.length ? this.getAvarageR(this.props.trades) : 0}</li>
          <li>Highest R:
          {this.props.trades.length ? this.getHighestR(this.props.trades) : 0}</li>
          <li> Lowest R:
          {this.props.trades.length ? this.getLowestR(this.props.trades) : 0}</li>
        </ul>
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