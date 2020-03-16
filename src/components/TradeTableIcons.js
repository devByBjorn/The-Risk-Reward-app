import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { trashcanIcon, editIcon } from '../icons/icons'

const TradeTableIcons = () => (
  <div>
    <button><FontAwesomeIcon icon={trashcanIcon} /></button>
    <button><FontAwesomeIcon icon={editIcon} /></button>
  </div>
)

export default TradeTableIcons