import uuid from 'uuid'

export const addDemon = ({
  title = '',
  description = '',
  management = ''
} = {}) => ({
  type: 'ADD_DEMON',
  demon: {
    title,
    description,
    management,
    id: uuid()
  }
})

export const editDemon = (id, updates) => ({
  type: 'EDIT_DEMON',
  id,
  updates
})

export const deleteDemon = ({ id }) => ({
  type: 'DELETE_DEMON',
  id
})
