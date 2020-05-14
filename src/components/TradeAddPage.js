import React from 'react'
import { connect } from 'react-redux'
import { addFirebaseTrade } from '../actions/tradeActions'
import FormParent from './FormParent'
//import FormParentTwo from './FormParentTwo'

export const TradeAddPage = ({ addFirebaseTrade, history }) => {
  const handleAddTrade = (trade) => {
    addFirebaseTrade(trade)
    history.push('/trades')
  }

  return (
    <div>
      <FormParent
        handleSubmit={handleAddTrade}
      />
    </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
  addFirebaseTrade: (trade) => dispatch(addFirebaseTrade(trade))
})

export default connect(null, mapDispatchToProps)(TradeAddPage)