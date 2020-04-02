import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addTrade } from '../actions/tradeActions'
import FirstAddForm from './forms/FirstAddForm'
import getFormDataPromise from '../promises/getFormDataPromise'
import TradeTableFormMain from './forms/copies'
import MainParentForm from './forms/MainParentForm'


class TradeAddFirstPage extends React.Component {
  handleAddTrade = (trade) => {
    this.props.addTrade(trade)
    this.props.history.push('/trades')
  }
  // handleAddTrade = (trade) => {
  //   const promise = getFormDataPromise(this.props.addTrade(trade))
  //   return promise.then((formData) => {
  //     switch (formData.trade.status) {
  //       case 'closed':
  //         return this.props.history.push('/add-closed-trade')
  //       case 'active':
  //         return this.props.history.push('/add-active-trade')
  //       case 'pending':
  //         return this.props.history.push('/trades')
  //     }
  //   }, (err) => console.log(err))
  // }
  render() {
    return (
      <div>
        <MainParentForm
          handleSubmit={this.handleAddTrade}
        />
        {/*   <NavLink to="/trades">Back to trade table</NavLink>
        <FirstAddForm
          handleSubmit={this.handleAddTrade}
    /> */}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTrade: (trade) => dispatch(addTrade(trade))
})

export default connect(null, mapDispatchToProps)(TradeAddFirstPage)