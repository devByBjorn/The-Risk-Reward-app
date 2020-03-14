import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { trashcanIcon, editIcon } from '../icons/icons'

const TradeTableRow = (
  {
    market,
    direction,
    startDate,
    endDate,
    opened,
    closed,
    period,
    outcome,
    riskReward }) => (

    <tr>
      <td>{market.toUpperCase()}</td>
      <td>{direction}</td>
      <td>{opened}</td>
      <td>{closed}</td>
      <td>{period}</td>
      <td>{outcome}</td>
      <td>{riskReward}</td>
      <td>
        <button><FontAwesomeIcon icon={trashcanIcon} /></button>
        <button><FontAwesomeIcon icon={editIcon} /></button>
      </td>
    </tr>
  )

export default TradeTableRow