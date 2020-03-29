import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { addTrade } from '../actions/tradeActions'
import TradeTableForm from './form/TradeTableForm'

const TradeAddPage = (props) => (
  <div>
    <NavLink to="/trades">Back to trade table</NavLink>
    <TradeTableForm
      handleSubmit={(trade) => {
        props.dispatch(addTrade(trade))
        props.history.push('/trades')
      }}
    />
  </div>
)

export default connect()(TradeAddPage)