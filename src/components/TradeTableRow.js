import React from 'react'
import moment from 'moment'

const TradeTableRow = (
  {
    market,
    direction,
    startDate,
    endDate,
    period,
    outcome,
    riskReward }) => (

    <tr>
      <td>{market.toUpperCase()}</td>
      <td>{direction}</td>
      <td>{moment(startDate).format('YYYY-MM-DD')}</td>
      <td>{moment(endDate).format('YYYY-MM-DD')}</td>
      <td>{period}</td>
      <td>{outcome}</td>
      <td>{riskReward}</td>
    </tr>
  )

export default TradeTableRow