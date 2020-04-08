import uuid from 'uuid'

const initDemonState = [
  {
    title: 'Too much risk',
    description: 'I tend to this when I...',
    management: 'When I recognise this behaviour I will..',
    id: uuid()
  },
  {
    title: 'Revange trading',
    description: 'I tend to this when I...',
    management: 'When I recognise this behaviour I will..',
    id: uuid()
  },
  {
    title: 'Trade out of boredom',
    description: 'I tend to this when I...',
    management: 'When I recognise this behaviour I will..',
    id: uuid()
  },
  {
    title: 'Twitter trade',
    description: 'I tend to this when I...',
    management: 'When I recognise this behaviour I will..',
    id: uuid()
  },
]

const demonReducer = (state = initDemonState, action) => {
  switch (action.type) {
    case 'ADD_DEMON':
      return [
        ...state,
        action.demon
      ]
    case 'EDIT_DEMON':
      return state.map((demon) => demon.id === action.id
        ? { ...demon, ...action.updates }
        : demon
      )
    case 'DELETE_DEMON':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

export default demonReducer