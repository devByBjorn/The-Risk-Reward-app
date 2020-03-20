import React from 'react'
import { connect } from 'react-redux'
import TradeTableForm from './form/TradeTableForm'
import { editTrade, deleteTrade } from '../actions/tradeActions'
import { TradeTableTrashIcon } from './table/TradeTableIcons'

const TradeEditPage = (props) => {
  return (
    <div>
      <TradeTableForm
        trade={props.trade}
        onSubmit={(trade) => {
          props.dispatch(editTrade(props.trade.id, trade))
        }}
      />
      <button
        onClick={() => {
          const { id } = props.trade
          props.dispatch(deleteTrade({ id }))
        }}>
        <TradeTableTrashIcon /> Trash trade</button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    trade: state.trades.find((trade) => trade.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(TradeEditPage)