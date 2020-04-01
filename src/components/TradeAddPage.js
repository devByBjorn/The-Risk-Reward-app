import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addTrade } from '../actions/tradeActions'
import TradeTableForm from './forms/TradeTableForm'
import FirstAddForm from './forms/FirstAddForm'
import ClosedTradeForm from './forms/ClosedTradeForm'
import ActiveTradeForm from './forms/ActiveTradeForm'

class TradeAddPage extends React.Component {
  handleAddTrade = (trade) => {
    this.props.addTrade(trade)
    this.props.history.push('/trades')
  }
  render() {
    return (
      <div>
        <NavLink to="/trades">Back to trade table</NavLink>
        <FirstAddForm
          handleSubmit={this.handleAddTrade}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTrade: (trade) => dispatch(addTrade(trade))
})

export default connect(null, mapDispatchToProps)(TradeAddPage)