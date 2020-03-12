import moment from 'moment'

const initFilterState = {
  searchText: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

const filterReducer = (state = initFilterState, action) => {
  switch (action.type) {
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    case 'SEARCH_BY_MARKET':
      return {
        ...state,
        searchText: action.searchText
      }
    default:
      return state

    // case 'SORT_BY_MARKET':
    //   return { ...state, sortBy: 'market' }
    // case 'SORT_BY_DIRECTION':
    //   return { ...state, sortBy: 'direction' }
    // case 'SORT_BY_R':
    //   return { ...state, sortBy: 'r' }
    // case 'SORT_BY_OUTCOME':
    //   return { ...state, sortBy: 'outcome' }
    // case 'SORT_BY_OPEN_DATE':
    //   return { ...state, sortBy: 'open' }
    // case 'SORT_BY_CLOSE_DATE':
    //   return { ...state, sortBy: 'close' }
  }
}

export default filterReducer