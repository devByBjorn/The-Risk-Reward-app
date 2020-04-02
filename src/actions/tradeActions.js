import uuid from 'uuid'

export const addTrade = ({
  direction = '',
  market = '',
  entry = 0,
  stop = 0,
  target = 0,
  status = '',
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
    opened,
    closed,
    period,
    outcome,
    rewardToRisk,
    conclusion,
    id: uuid()
  }
})

export const addActiveTrade = ({
  direction = '',
  market = '',
  entry = 0,
  stop = 0,
  target = 0,
  status = '',
  opened = 0,
} = {}) => ({
  type: 'ADD_ACTIVE_TRADE',
  active: {
    direction,
    market,
    entry,
    stop,
    target,
    status,
    opened,
    id: uuid(),
  }
})

export const addPendingTrade = ({
  direction = '',
  market = '',
  entry = 0,
  stop = 0,
  target = 0,
  status = '',
} = {}) => ({
  type: 'ADD_PENGING_TRADE',
  pending: {
    direction,
    market,
    entry,
    stop,
    target,
    status,
    id: uuid(),
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