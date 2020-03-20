import uuid from 'uuid'

export const addTrade = ({
  direction = '',
  market = '',
  entry = '',
  stop = '',
  target = '',
  opened = '',
  closed = '',
  period = '',
  outcome = '',
  rewardToRisk = '',
  conclusion = {}
} = {}) => ({
  type: 'ADD_TRADE',
  trade: {
    direction,
    market,
    entry,
    stop,
    target,
    opened,
    closed,
    period,
    outcome,
    rewardToRisk,
    conclusion,
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