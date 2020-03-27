import tradeReducer from '../../reducers/tradeReducer'
import prevState from '../fixtures/tradesPrevState'

// INIT STATE
test('should reurn emput array as init state', () => {
  const initState = tradeReducer(undefined, { type: '@@init' })
  expect(initState).toEqual([])
})

// ADD TRADE
test('should add one trade to trades array(prevState)', () => {
  const action = {
    type: 'ADD_TRADE',
    trade: {
      direction: "long",
      market: "OMX30",
      entry: "1285",
      stop: "1270",
      target: "1350",
      opened: 2,
      closed: 8,
      period: 6,
      outcome: "win",
      rewardToRisk: 4.33,
      conclusion: {
        execution: "good",
        management: "good",
        whyNote: "note",
        improveNote: "note",
      },
      id: "badf4096-51d6-4907-9b30-e01eed5f6285"
    }
  }

  const newState = tradeReducer(prevState, action)
  expect(newState).toEqual([
    ...prevState,
    {
      direction: "long",
      market: "OMX30",
      entry: "1285",
      stop: "1270",
      target: "1350",
      opened: 2,
      closed: 8,
      period: 6,
      outcome: "win",
      rewardToRisk: 4.33,
      conclusion: {
        execution: "good",
        management: "good",
        whyNote: "note",
        improveNote: "note",
      },
      id: "badf4096-51d6-4907-9b30-e01eed5f6285"
    }
  ])
})

// EDIT TRADE
test('should edit prop(s) of chosen trade, choice by id', () => {
  const action = {
    type: 'EDIT_TRADE',
    id: prevState[0].id,
    updates: {
      outcome: 'loss',
      conclusion: {
        whyNote: 'turned a winner into a looser',
        improveNote: 'manage risk by trailing stop'
      }
    }
  }

  const newState = tradeReducer(prevState, action)
  expect(newState).toEqual([
    {
      ...prevState[0],
      outcome: 'loss',
      conclusion: {
        whyNote: 'turned a winner into a looser',
        improveNote: 'manage risk by trailing stop'
      }
    },
    prevState[1],
    prevState[2],
  ])
})

// DELETE TRADE
test('should delet trade from list based on id', () => {
  const action = {
    type: 'DELETE_TRADE',
    id: prevState[1].id
  }

  const newState = tradeReducer(prevState, action)
  expect(newState).toEqual([prevState[0], prevState[2]])
})