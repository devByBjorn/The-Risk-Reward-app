import uuid from 'uuid'

export const addTrade = ({
  direction = '',
  market = '',
  opened = '',
  closed = '',
  period = '',
  outcome = '',
  rewardToRisk = '',
  thoughts = ''
} = {}) => ({
  type: 'ADD_TRADE',
  trade: {
    direction,
    market,
    opened,
    closed,
    period,
    outcome,
    rewardToRisk,
    thoughts,
    id: uuid()
  }
})


export const editTrade = ({ id, updates }) => ({
  type: 'EDIT_TRADE',
  id,
  updates
})

export const deleteTrade = ({ id }) => ({
  type: 'DELETE_TRADE',
  id
})