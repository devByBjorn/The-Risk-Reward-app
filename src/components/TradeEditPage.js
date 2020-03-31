import React from 'react'
import { connect } from 'react-redux'
import TradeTableForm from './form/TradeTableForm'
import { editTrade, deleteTrade } from '../actions/tradeActions'
import { TrashIcon } from './table/TradeTableIcons'

class TradeEditPage extends React.Component {
  handleEditOnAdd = (trade) => {
    this.props.editTrade(this.props.trade.id, trade)
    this.props.history.push('/trades')
  }
  handleDeletOnTrash = () => {
    const { id } = this.props.trade
    this.props.deleteTrade({ id })
    this.props.history.push('/trades')
  }
  render() {
    return (
      <div>
        <TradeTableForm
          trade={this.props.trade}
          handleSubmit={this.handleEditOnAdd}
        />
        <button
          onClick={this.handleDeletOnTrash}>
          <TrashIcon /> Trash trade</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    trade: state.trades.find((trade) => trade.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  editTrade: (id, trade) => dispatch(editTrade(id, trade)),
  deletTrade: (trade) => dispatch(deleteTrade(trade))
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeEditPage)