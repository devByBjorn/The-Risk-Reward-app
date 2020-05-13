import tradeReducer from '../../reducers/tradeReducer'
import { trades } from '../fixtures/trades'

test('should set default state', () => {
  const initState = tradeReducer(undefined, { type: '@@init' })
  expect(initState).toEqual([])
})

test('shuold add trade object to trades array', () => {
  const action = {
    type: 'ADD_TRADE',
    trade: {
      id: '123',
      direction: 'long',
      market: 'usdjpy',
      entry: 107,
      stop: 106.45,
      target: 108.25,
      exit: 108.25,
      status: 'closed',
      setup: 'daily sfp',
      opened: 1587031851000,
      closed: 1587115800000,
      period: 0,
      outcome: 'win',
      rewardToRisk: 2,
      rMultiple: 2,
      risk: false,
      reward: false,
      conclusion: {
        execution: 'abc',
        improveExecution: 'def',
        management: 'ghi',
        improveManagement: 'jkl',
        whyExecution: 'mno',
        whyManagement: 'pqr',
      }
    }
  }

  const result = tradeReducer(trades, action)
  expect(result).toEqual([
    ...trades,
    action.trade
  ])
})

test('should delete trade by id', () => {
  const action = {
    type: 'DELETE_TRADE',
    id: trades[0].id
  }
  const result = tradeReducer(trades, action)
  expect(result).toEqual([trades[1], trades[2]])
})

test('should fail to find id and not delete any trade', () => {
  const action = {
    type: 'DELETE_TRADE',
    id: 'noSuchId'
  }
  const result = tradeReducer(trades, action)
  expect(result).toEqual(trades)
})

test('should update selected trade and return all trades', () => {
  const action = {
    type: 'EDIT_TRADE',
    id: trades[0].id,
    updates: {
      status: 'active',
      closed: '',
      exit: 0,
      outcome: '',
    }
  }
  const result = tradeReducer(trades, action)
  expect(result).toEqual([
    {
      ...trades[0],
      status: 'active',
      closed: '',
      exit: 0,
      outcome: '',
    },
    trades[1],
    trades[2],
  ])
})

test('no match id when edit, should return trades unEdit', () => {
  const action = {
    type: 'EDIT_TRADE',
    id: 'noSuchId',
    updates: {
      status: 'active',
      closed: '',
      exit: 0,
      outcome: '',
    }
  }
  const result = tradeReducer(trades, action)
  expect(result).toEqual(trades)
})

test('should set expenses', () => {
  const action = {
    type: 'SET_TRADES',
    trades: {
      ...trades
    }
  }

  const result = tradeReducer(trades, action)
  expect(result).toEqual(action.trades)
})