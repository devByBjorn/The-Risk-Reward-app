import filterReducer from '../../reducers/filterReducer'
import prevState from '../fixtures/filtersPrevState'
import moment from 'moment'

// INIT STATE
test('should return filter init state', () => {
  const initState = filterReducer(undefined, { type: '@@init' })
  expect(initState).toEqual({
    searchText: '',
    sortBy: 'date',
    sorted: false,
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

// SET START DATE
test('should set a new start date', () => {
  const action = {
    type: 'SET_START_DATE',
    startDate: moment().startOf('month')
  }
  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    startDate: moment().startOf('month')
  })
})

// SET END DATE
test('should set a new end date', () => {
  const action = {
    type: 'SET_END_DATE',
    endDate: moment().endOf('month')
  }
  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    endDate: moment().endOf('month')
  })
})

// SEARCH BY MARKET - SEARCH TEXT
test('should change serachText', () => {
  const action = {
    type: 'SEARCH_BY_MARKET',
    searchText: 'APPLE'
  }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    searchText: 'APPLE'
  })
})

// SORT BY MARKET 
test('should set sortBy to market', () => {
  const action = { type: 'SORT_BY_MARKET', }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'market',
    sorted: true
  })
})

// SORT BY DIRECTION 
test('should set sortBy to direction', () => {
  const action = { type: 'SORT_BY_DIRECTION' }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'direction',
    sorted: true
  })
})

// SORT BY R
test('should set sortBy to r', () => {
  const action = { type: 'SORT_BY_R' }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'r',
    sorted: true
  })
})

// SORT BY OUTCOME
test('should set sortBy to outcome', () => {
  const action = { type: 'SORT_BY_OUTCOME' }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'outcome',
    sorted: true
  })
})

// SORT BY OPENED
test('should set sortBy to opened', () => {
  const action = { type: 'SORT_BY_OPENED' }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'opened',
    sorted: true
  })
})

// SORT BY CLOSED
test('should set sortBy to closed', () => {
  const action = { type: 'SORT_BY_CLOSED' }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'closed',
    sorted: true
  })
})

// SORT BY PERIOD
test('should set sortBy to PERIOD', () => {
  const action = { type: 'SORT_BY_PERIOD' }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'period',
    sorted: true
  })
})

// SORT BY EXECUTION
test('should set sortBy to execution', () => {
  const action = { type: 'SORT_BY_EXECUTION' }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'execution',
    sorted: true
  })
})

// SORT BY MANAGEMENT
test('should set sortBy to management', () => {
  const action = { type: 'SORT_BY_MANAGEMENT' }

  const newState = filterReducer(prevState, action)
  expect(newState).toEqual({
    ...prevState,
    sortBy: 'management',
    sorted: true
  })
})