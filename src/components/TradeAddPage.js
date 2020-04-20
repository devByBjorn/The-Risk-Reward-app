import React from 'react'
import { connect } from 'react-redux'
import { startAddTrade } from '../actions/tradeActions'
import TradeParentForm from './TradeParentForm'

const TradeAddPage = ({ startAddTrade, history }) => {
  const handleAddTrade = (trade) => {
    startAddTrade(trade)
    history.push('/trades')
  }

  return (
    <div>
      <TradeParentForm
        handleSubmit={handleAddTrade}
      />
    </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
  startAddTrade: (trade) => dispatch(startAddTrade(trade))
})

export default connect(null, mapDispatchToProps)(TradeAddPage)