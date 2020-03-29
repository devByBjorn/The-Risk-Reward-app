const initDemonState = []

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