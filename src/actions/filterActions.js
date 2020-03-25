// SET CALENDER SPAN
export const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
})

export const setEndDate = (endDate = null) => ({
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
export const sortByPeriod = () => ({
  type: 'SORT_BY_PERIOD'
})
export const sortByExecution = () => ({
  type: 'SORT_BY_EXECUTION'
})
export const sortByManagement = () => ({
  type: 'SORT_BY_MANAGEMENT'
})
