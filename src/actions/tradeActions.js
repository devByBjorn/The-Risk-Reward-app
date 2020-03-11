import uuid from 'uuid'

export const addTrade = ({
  direction = '',
  market = '',
  entry = '',
  stop = '',
  target = '',
  open = 0,
  closed = 0,
} = {}) => ({
  type: 'ADD_TRADE',
  trade: {
    direction,
    market,
    entry,
    stop,
    target,
    open,
    closed,
    id: uuid()
  }
})


export const editTrade = ({ id }) => ({
  type: 'EDIT_TRADE',
  id
})

export const deleteTrade = ({ id }) => ({
  type: 'DELETE_TRADE',
  id
})