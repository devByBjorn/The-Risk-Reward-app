import React from 'react'
import { connect } from 'react-redux'
import { editTrade, deleteTrade } from '../actions/tradeActions'
import TradeParentForm from './TradeParentForm'
import Btn from './Btn'
import { TrashIcon } from '../icons/IconsComponents'


class TradeEditPage extends React.Component {
  handleEditOnAdd = (trade) => {
    this.props.editTrade(this.props.trade.id, trade)
    this.props.history.push('/trades')
  }
  handleDeleteOnTrash = () => {
    this.props.deleteTrade({ id: this.props.trade.id })
    this.props.history.push('/trades')
  }
  render() {
    return (
      <div>
        <TradeParentForm
          pathname={this.props.location.pathname}
          trade={this.props.trade}
          handleSubmit={this.handleEditOnAdd}
        />
        <Btn
          text={<TrashIcon />}
          onClick={this.handleDeleteOnTrash}
        />
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
  deleteTrade: (id) => dispatch(deleteTrade(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeEditPage)