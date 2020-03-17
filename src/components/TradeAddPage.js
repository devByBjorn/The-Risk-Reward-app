import React from 'react'
import { connect } from 'react-redux'
import { addTrade } from '../actions/tradeActions'
import TradeTableForm from './TradeTableForm'

const TradeAddPage = (props) => (
  <div>
    <TradeTableForm
      handleSubmit={(trade) => {
        return props.dispatch(addTrade(trade))
      }}
    />
  </div>
)

export default connect()(TradeAddPage)