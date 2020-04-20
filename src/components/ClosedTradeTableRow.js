import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { EditIcon, TrashIcon } from '../icons/IconsComponents'
import { deleteTrade } from '../actions/tradeActions'




const ClosedTradeTableRow = (
  {
    dispatch,
    market,
    direction,
    setup,
    opened,
    closed,
    status,
    outcome,
    rewardToRisk,
    id }) => {

  const [rowColor, setRowColor] = useState('')

  const colors = {
    win: '#7FBA00',
    loss: '#F0341B',
    scratch: '#FFB900'
  }
  const { win, loss, scratch } = colors

  useEffect(() => {
    if (outcome === 'win') {
      setRowColor(win)
    } else if (outcome === 'loss') {
      setRowColor(loss)
    } else {
      setRowColor(scratch)
    }
  })

  return (
    status === 'closed' &&

    <tr style={{ backgroundColor: rowColor }}>
      <td>{market}</td>
      <td>{direction}</td>
      <td>{setup}</td>
      <td>{rewardToRisk}</td>
      <td className="desktop">{opened}</td>
      <td className="desktop">{closed}</td>
      <td className="desktop">{outcome}</td>
      <td className="handle-trade-row">
        <div className="handle-trade">
          <Link to={`/edit-trade/${id}`}>
            <EditIcon
              className="edit-icon icon"
            />
          </Link>
          <button
            className="btn-transparent"
            onClick={() => {
              alert('Do you want to delete this trade?')
              dispatch(deleteTrade({ id }))
            }}
          ><TrashIcon
              className="trashcan-icon icon"
            />
          </button>
        </div>
      </td>
    </tr>
  )
}
export default connect()(ClosedTradeTableRow)