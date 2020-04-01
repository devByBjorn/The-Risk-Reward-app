import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { trashcanIcon, editIcon, questionIcon } from './iconsCreate'

export const TrashIcon = () => (
  <div>
    <FontAwesomeIcon icon={trashcanIcon} />
  </div>
)

export const EditIcon = () => (
  <div>
    <FontAwesomeIcon icon={editIcon} />
  </div>
)

export const QuestionIcon = () => (
  <div>
    <FontAwesomeIcon icon={questionIcon} />
  </div>
)


