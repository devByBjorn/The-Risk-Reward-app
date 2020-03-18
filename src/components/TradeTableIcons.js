import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { connect } from 'react-redux'
import { editTrade, deleteTrade } from '../actions/tradeActions'
import { trashcanIcon, editIcon } from '../icons/icons'
import { Link } from 'react-router-dom'

/*
    <button
    
      onClick={() => {
        const {id} = props.trade
        props.dispatch(deleteTrade({ id }))
      }}
    ><FontAwesomeIcon icon={trashcanIcon} /></button>
*/

export const TradeTableTrashIcon = () => (
  <div>
    <FontAwesomeIcon icon={trashcanIcon} />
  </div>
)

export const TradeTableEditIcon = () => (
  <div>
    <FontAwesomeIcon icon={editIcon} />
  </div>
)


