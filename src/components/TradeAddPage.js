import React from 'react'
import { connect } from 'react-redux'
import { addFirebaseTrade } from '../actions/tradeActions'
import TradeParentForm from './TradeParentForm'

const TradeAddPage = ({ addFirebaseTrade, history }) => {
  const handleAddTrade = (trade) => {
    addFirebaseTrade(trade)
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
  addFirebaseTrade: (trade) => dispatch(addFirebaseTrade(trade))
})

export default connect(null, mapDispatchToProps)(TradeAddPage)