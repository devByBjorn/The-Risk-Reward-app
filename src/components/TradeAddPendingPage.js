import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addTrade } from '../actions/tradeActions'
import PendingTradeForm from './forms/PendingTradeForm'

class TradeAddPendingPage extends React.Component {
  handleAddTrade = (trade) => {
    this.props.addTrade(trade)
    this.props.history.push('/trades')
  }
  render() {
    return (
      <div>
        <NavLink to="/trades">Back to trade table</NavLink>
        <PendingTradeForm
          handleSubmit={this.handleAddTrade}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTrade: (trade) => dispatch(addTrade(trade))
})

export default connect(null, mapDispatchToProps)(TradeAddPendingPage)