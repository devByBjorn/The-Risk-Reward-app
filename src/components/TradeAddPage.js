import React from 'react'
import { connect } from 'react-redux'
import { addTrade } from '../actions/tradeActions'
import TradeTableForm from './TradeTableForm'

const TradeAddPage = () => (
  <div>
    <TradeTableForm />
  </div>
)

export default TradeAddPage