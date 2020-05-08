import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
  addTrade, editTrade, deleteTrade, setTrades,
  addFirebaseTrade, setFireBaseTrades,
  deleteFirebaseTrade, editFirebaseTrade
} from '../../actions/tradeActions'
import database from '../../firebase/firebase'
import { trades, tradeDefault } from '../fixtures/trades'

const uid = 'ksjgksjgasdfsdf-a535a356'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

const now = new Date('2020-03-22')
const then = new Date('2020-04-02')

beforeEach((done) => {
  const tradesData = {}

  trades.forEach(({
    id,
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
    negativeR,
    positiveR,
    conclusion,
  }) => {
    tradesData[id] = {
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
      negativeR,
      positiveR,
      conclusion,
    }
  })

  database
    .ref(`users/${uid}/trades`)
    .set(tradesData)
    .then(() => done())
})

// DELETE
test('should setup deleteTrade object', () => {
  const action = deleteTrade({ id: '123abc' })
  expect(action).toEqual({
    type: 'DELETE_TRADE',
    id: '123abc'
  })
})

test('should delete trade from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = trades[2].id
  store.dispatch(deleteFirebaseTrade({ id }))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'DELETE_TRADE',
        id
      })
      done()
    }, 3000)
})

// EDIT
test('should setup edit trade', () => {
  const action = editTrade('123abc', { status: 'active' })
  expect(action).toEqual({
    type: 'EDIT_TRADE',
    id: '123abc',
    updates: {
      status: 'active'
    }
  })
})

test('should setup edit trade from firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const id = trades[0].id
  const updates = { closed: 55 }

  store.dispatch(editFirebaseTrade(id, updates))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'EDIT_TRADE',
        id,
        updates
      })
      return database
        .ref(`users/${uid}/trades/${id}`)
        .once('value')
    }).then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount)
      done()
    }, 3000)
})

// ADD
test('should set up add trade with provided values', () => {
  const action = addTrade(trades[2])

  expect(action).toEqual({
    type: 'ADD_TRADE',
    trade: trades[2]
  })
})

test('should set up add trade to firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const tradeData = {
    direction: 'short',
    market: 'dax',
    entry: 12500,
    stop: 12800,
    target: 11900,
    status: 'closed',
    setup: 'weekly low break',
    opened: 9,
    closed: 10,
    period: 1,
    outcome: 'win',
    rewardToRisk: 2,
    negativeR: false,
    positiveR: false,
    conclusion: {
      execution: 'sdg sdg sd',
      improveExecution: 'fh gjgfjj',
      management: 'dsg s jgdj gj',
      improveManagement: 'dfhasdh dfh dfhdf',
      whyExecution: 'afdhdfh dfhdfhdf',
      whyManagement: 'dfdfhdfh dfah adfh',
    }
  }
  store.dispatch(addFirebaseTrade(tradeData))
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'ADD_TRADE',
        trade: {
          id: expect.any(String),
          ...tradeData
        }
      })

      return database
        .ref(`users/${uid}/trades/${actions[0].trade.id}`)
        .once('value')
    }).then((snapshot) => {
      expect(snapshot.val())
        .toEqual(tradeData)
      done()
    }, 3000)
})

test('should add trade defaults to firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  const defaultData = tradeDefault

  store.dispatch(addFirebaseTrade(defaultData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_TRADE',
      trade: {
        id: expect.any(String),
        ...defaultData,
      }
    })

    return database
      .ref(`users/${uid}/trades/${actions[0].trade.id}`)
      .once('value')
  }).then((snapshot) => {
    expect(snapshot.val())
      .toEqual(defaultData)
    done()
  }, 3000)
})

//SET
test('should setup set trades action object with data', () => {
  const action = setTrades(trades)
  expect(action).toEqual({
    type: 'SET_TRADES',
    trades
  })
})

test('should fetch trades form firebase', (done) => {
  const store = createMockStore(defaultAuthState)
  store.dispatch(setFireBaseTrades())
    .then(() => {
      const actions = store.getActions()
      expect(actions[0]).toEqual({
        type: 'SET_TRADES',
        trades
      })
      done()
    }, 3000)
})