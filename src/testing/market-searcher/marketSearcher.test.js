import marketSearcher from '../../market-searcher/marketSearcher'
import prevState from '../fixtures/tradesPrevState'
import moment from 'moment'

// filters used to sort list
const filters = {
  searchText: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}

// FILTER LIST ON USER SEARCH
test('should filter out on user search', () => {
  const filter = { ...filters, searchText: 'crude' }
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([prevState[1]])
})

// FILTER LIST ON START DATE
test('should filter list based on opened trade date match of endDate and startDate', () => {
  const filter = { ...filters, startDate: moment(0).add(3, 'days') }
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[1]
  ])
})

test('should filter list based on opened trade date match of endDate and startDate', () => {
  const filter = { ...filters, startDate: moment(0).subtract(3, 'days') }
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[0],
    prevState[1]
  ])
})


// lazy function for sorting aplabetic values
const sortHelper = (value, boolean) => ({ ...filters, sortBy: value, sorted: boolean })

// SORT LIST BY MARKET
// sortBy set to 'market' and sorted true
test('should sort list by market a-z', () => {
  const filter = sortHelper('market', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[1],
    prevState[0],
    prevState[2]
  ])
})


//sortBy set to 'market' and sorted false
test('should sort list by market z-a', () => {
  const filter = sortHelper('market', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[2],
    prevState[0],
    prevState[1]
  ])
})

//SORT LIST BY DIRECTION
// sortBy set to direction and sorted to true
test('should sort list by direction long-short', () => {
  const filter = sortHelper('direction', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[0],
    prevState[2],
    prevState[1]
  ])
})

// sortBy set to direction and sorted to false
test('should sort list by direction short-long', () => {
  const filter = sortHelper('direction', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[1],
    prevState[0],
    prevState[2]
  ])
})

//SORT LIST BY OUTCOME
// sortBy set to outcome and sorted to true
test('should sort list by outcome loss-win', () => {
  const filter = sortHelper('outcome', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[0],
    prevState[1],
    prevState[2],
  ])
})

// sortBy set to outcome and sorted to false
test('should sort list by outcome win-loss', () => {
  const filter = sortHelper('outcome', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[1],
    prevState[2],
    prevState[0],
  ])
})

// SORT LIST BY EXECUTION
// sortBy set to execution and sorted to true
test('should sort list by execution both-good-poor', () => {
  const filter = sortHelper('execution', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[0],
    prevState[2],
    prevState[1],
  ])
})

// sortBy set to execution and sorted to false
test('should sort list by execution poor-good-both', () => {
  const filter = sortHelper('execution', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[1],
    prevState[2],
    prevState[0],
  ])
})

// SORT LIST BY MANAGEMENT 
// sortBy set to management and sorted to true
test('should sort list by management both-good-poor', () => {
  const filter = sortHelper('management', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[1],
    prevState[2],
    prevState[0],
  ])
})

// sortBy set to management and sorted to false
test('should sort list by management poor-good-both', () => {
  const filter = sortHelper('management', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[0],
    prevState[2],
    prevState[1],
  ])
})

// SORT LIST BY OPENED 
// sortBy set to opened and sorted to true
test('should sort list by opened 9-1', () => {
  const filter = sortHelper('opened', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[1],
    prevState[0],
    prevState[2],
  ])
})

// sortBy set to opened and sorted to false
test('should sort list by opened 1-9', () => {
  const filter = sortHelper('opened', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[2],
    prevState[0],
    prevState[1],
  ])
})

// SORT LIST BY CLOSED
// sortBy set to closed and sorted to true
test('should sort list by closed 9-1', () => {
  const filter = sortHelper('closed', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[1],
    prevState[0],
    prevState[2],
  ])
})

// sortBy set to closed and sorted to false
test('should sort list by closed 1-9', () => {
  const filter = sortHelper('closed', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[2],
    prevState[0],
    prevState[1],
  ])
})

// SORT LIST BY PERIOD
// sortBy set to period and sorted to true
test('should sort list by period 9-1', () => {
  const filter = sortHelper('period', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[2],
    prevState[1],
    prevState[0],
  ])
})

// sortBy set to period and sorted to false
test('should sort list by period 1-9', () => {
  const filter = sortHelper('period', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[0],
    prevState[1],
    prevState[2],
  ])
})

// SORT LIST BY R
// sortBy set to r and sorted to true
test('should sort list by r 9-1', () => {
  const filter = sortHelper('r', true)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[2],
    prevState[1],
    prevState[0],
  ])
})

// sortBy set to r and sorted to false
test('should sort list by r 1-9', () => {
  const filter = sortHelper('r', false)
  const result = marketSearcher(prevState, filter)
  expect(result).toEqual([
    prevState[0],
    prevState[1],
    prevState[2],
  ])
})