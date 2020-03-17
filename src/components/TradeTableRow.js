import React from 'react'
import { Link } from 'react-router-dom'
import TradeTableEditIcon from './TradeTableIcons'

const TradeTableRow = (
  {
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
        <Link to={`/edit/${id}`}>
          <TradeTableEditIcon />
        </Link>
      </td>
    </tr>
  )

export default TradeTableRow