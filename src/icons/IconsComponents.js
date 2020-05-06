import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { trashcanIcon, editIcon, questionIcon, googleIcon } from './iconsCreate'

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
export const GoogleIcon = (props) => (
  <div>
    <FontAwesomeIcon
      {...props}
      icon={googleIcon} />
  </div>
)




