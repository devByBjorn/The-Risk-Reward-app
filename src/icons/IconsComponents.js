import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { trashcanIcon, editIcon, questionIcon } from './iconsCreate'

export const TrashIcon = (props) => (
  <div>
    <FontAwesomeIcon
      {...props}
      icon={trashcanIcon} />
  </div>
)

export const EditIcon = (props) => (
  <div>
    <FontAwesomeIcon
      {...props}
      icon={editIcon} />
  </div>
)

export const QuestionIcon = (props) => (
  <div>
    <FontAwesomeIcon
      {...props}
      icon={questionIcon} />
  </div>
)


