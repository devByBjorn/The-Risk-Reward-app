import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'

library.add(faTrashAlt, faEdit, faQuestionCircle)

const trashcanIcon = icon(faTrashAlt)
const editIcon = icon(faEdit)
const questionIcon = icon(faQuestionCircle)


export { trashcanIcon, editIcon, questionIcon, }