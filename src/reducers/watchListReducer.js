const initWatchListState = []

const watchListReducer = (state = initWatchListState, action) => {
  switch (action) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.item
      ]
    case 'EDIT_ITEM':
      return state.map((item) => item.id === action.id
        ? { ...state, ...action.updates }
        : item
      )
    case 'DELETE_ITEM':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}