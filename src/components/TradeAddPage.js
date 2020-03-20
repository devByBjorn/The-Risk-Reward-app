import React from 'react'
import { connect } from 'react-redux'
import { addTrade } from '../actions/tradeActions'
import TradeTableForm from './form/TradeTableForm'

const TradeAddPage = (props) => (
  <div>
    <TradeTableForm
      handleSubmit={(trade) => {
        props.dispatch(addTrade(trade))
        props.history.push('/trades')
      }}
    />
  </div>
)

export default connect()(TradeAddPage)