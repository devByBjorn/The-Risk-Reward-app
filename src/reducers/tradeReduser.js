const initTradeState = []

const tradeReducer = (state = initTradeState, action) => {
  switch (action.type) {
    case 'ADD_TRADE':
      return [
        ...state,
        action.trade
      ]
    case 'EDIT_TRADE':
      return state.filter(({ id }) => id === action.id
        ? { ...state, ...action.updates }
        : trade
      )
    case 'DELETE_TRADE':
      return state.filter(({ id }) => id !== action.id)

    default:
      return state
  }
}

export default tradeReducer