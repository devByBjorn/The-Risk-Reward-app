import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { editFirebaseTrade, deleteFirebaseTrade } from '../actions/tradeActions'
import FormParent from './FormParent'

class TradeEditPage extends React.Component {
  handleEditOnAdd = (trade) => {
    this.props.editFirebaseTrade(this.props.trade.id, trade)
    this.props.history.push('/trades')
  }
  render() {
    return (
      <Fragment>
        <FormParent
          pathname={this.props.location.pathname}
          trade={this.props.trade}
          handleSubmit={this.handleEditOnAdd}
        />
      </Fragment>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    trade: state.trades.find((trade) => trade.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch) => ({
  editFirebaseTrade: (id, trade) => dispatch(editFirebaseTrade(id, trade)),
  deleteFirebaseTrade: (id) => dispatch(deleteFirebaseTrade(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TradeEditPage)

