import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { EditIcon, TrashIcon } from './TradeTableIcons'
import { deleteTrade } from '../../actions/tradeActions'

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
    conclusion,
    id }) => (

    <tr>
      <td>{market}</td>
      <td>{direction}</td>
      <td>{opened}</td>
      <td>{closed}</td>
      <td>{period}</td>
      <td>{conclusion.execution}</td>
      <td>{conclusion.management}</td>
      <td>{outcome}</td>
      <td>{rewardToRisk}</td>
      <td>
        <div>
          <Link to={`/edit-trade/${id}`}>
            <EditIcon />
          </Link>
          <button
            onClick={() => {
              dispatch(deleteTrade({ id }))
            }}
          ><TrashIcon />
          </button>
        </div>
      </td>
    </tr>
  )

export default connect()(TradeTableRow)