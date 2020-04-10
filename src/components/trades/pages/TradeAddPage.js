import React from 'react'
import { connect } from 'react-redux'
import { addTrade } from '../../../actions/tradeActions'
import TradeParentForm from '../forms/TradeParentForm'

const TradeAddPage = (props) => {
  const handleAddTrade = (trade) => {
    props.addTrade(trade)
    props.history.push('/trades')
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
  addTrade: (trade) => dispatch(addTrade(trade))
})

export default connect(null, mapDispatchToProps)(TradeAddPage)