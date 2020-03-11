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

export const sortByOpen = () => ({
  type: 'SORT_BY_OPEN'
})

export const sortByClose = () => ({
  type: 'SORT_BY_CLOSE'
})

// SET CALENDER SPAN
export const setStartDate = (startDate = null) => ({
  type: 'SET_START_DATE',
  startDate
})

export const setCloseDate = (endDate = null) => ({
  type: 'SET_END_DATE',
  endDate
})