import uuid from 'uuid'
const watchListReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        {
          market: action.market,
          context: action.context,
          buyAreas: action.buyAreas,
          sellAreas: action.sellAreas,
          id: uuid()
        }
      ]
    case 'DELETE_ITEM':
      return state.filter(({ id }) => id !== action.id)
    default:
      return state
  }
}

export default watchListReducer