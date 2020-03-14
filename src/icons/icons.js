import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

library.add(faTrashAlt, faEdit, faQuestionCircle)

export const trashcanIcon = icon(faTrashAlt)
export const editIcon = icon(faEdit)
export const questionIcon = icon(faQuestionCircle)