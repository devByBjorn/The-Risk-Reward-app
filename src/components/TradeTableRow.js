import React from 'react'
import TradeTableIcons from './TradeTableIcons'

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
        <TradeTableIcons />
      </td>
    </tr>
  )

export default TradeTableRow