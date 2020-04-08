import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addTrade } from '../../../actions/tradeActions'
import TradeParentForm from '../forms/TradeParentForm'


class TradeAddFirstPage extends React.Component {
  handleAddTrade = (trade) => {
    this.props.addTrade(trade)
    this.props.history.push('/trades')
  }
  render() {
    return (
      <div>
        <TradeParentForm
          handleSubmit={this.handleAddTrade}
        />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTrade: (trade) => dispatch(addTrade(trade))
})

export default connect(null, mapDispatchToProps)(TradeAddFirstPage)