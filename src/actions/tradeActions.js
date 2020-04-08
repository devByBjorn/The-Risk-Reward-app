import uuid from 'uuid'

export const addTrade = ({
  direction = '',
  market = '',
  entry = 0,
  stop = 0,
  target = 0,
  status = '',
  setup = '',
  opened = 0,
  closed = 0,
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
    status,
    setup,
    opened,
    closed,
    period,
    outcome,
    rewardToRisk,
    conclusion,
    id: uuid()
  }
})

export const editTrade = (id, updates) => ({
  type: 'EDIT_TRADE',
  id,
  updates
})

export const deleteTrade = ({ id }) => ({
  type: 'DELETE_TRADE',
  id
})