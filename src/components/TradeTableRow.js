import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { TradeTableEditIcon, TradeTableTrashIcon } from './TradeTableIcons'
import { deleteTrade } from '../actions/tradeActions'

const TradeTableRow = (
  {
    dispatch,
    market,
    direction,
    opened,
    closed,
    period,
    outcome,
    rewardToRisk,
    id }) => (

    <tr>
      <td>{market}</td>
      <td>{direction}</td>
      <td>{opened}</td>
      <td>{closed}</td>
      <td>{period}</td>
      <td>{outcome}</td>
      <td>{rewardToRisk}</td>
      <td>
        <div>
          <Link to={`/edit/${id}`}>
            <TradeTableEditIcon />
          </Link>
          <button
            onClick={() => {
              dispatch(deleteTrade({ id }))
            }}
          ><TradeTableTrashIcon />
          </button>
        </div>
      </td>
    </tr>
  )

export default connect()(TradeTableRow)