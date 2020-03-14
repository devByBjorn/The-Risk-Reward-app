import React from 'react'

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
    </tr>
  )

export default TradeTableRow