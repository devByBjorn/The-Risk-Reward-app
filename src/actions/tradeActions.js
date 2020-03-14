import uuid from 'uuid'

export const addTrade = ({
  direction = '',
  market = '',
  entry = '',
  stop = '',
  target = '',
  opened = 0,
  closed = 0,
  period = 0, // period = closed - opened, set up calculation in tradeForm ? 
  outcome = '',
  riskReward = 0, // entry, strop, target propertues to calcualte, set up calculation in tradeForm ? 
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
    riskReward,
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