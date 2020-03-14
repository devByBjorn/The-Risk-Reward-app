// Use tablesort library instead of manually
// Set up a text sorting possibility


// SET CALENDER SPAN
export const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
})

export const setCloseDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate
})

export const searchByMarket = (searchText = '') => ({
  type: 'SEARCH_BY_MARKET',
  searchText
})

export const sortByMarket = () => ({
  type: 'SORT_BY_MARKET',
})

export const sortByDirection = () => ({
  type: 'SORT_BY_DIRECTION'
})

export const sortByR = () => ({
  type: 'SORT_BY_R'
})

export const sortByOutcome = () => ({
  type: 'SORT_BY_OUTCOME'
})

export const sortByOpened = () => ({
  type: 'SORT_BY_OPENED'
})

export const sortByClosed = () => ({
  type: 'SORT_BY_CLOSED'
})