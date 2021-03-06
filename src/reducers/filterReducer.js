//import moment from 'moment'

// Make sortNum, sortString a part on initialState to be able to toogle in trade table
// Why do that? To be able to use commmented out actions instead of the monster of a class
// that is TradeTableTwo
const initFilterState = {
  searchText: '',
  sortBy: 'date',
  sorted: false,
  //startDate: moment().startOf('year'),
  //endDate: moment()
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
        searchText
      }
    case 'SORT_BY_MARKET':
      return {
        ...state,
        sortBy: 'market',
        sorted: !state.sorted
      }
    default:
      return state
    case 'SORT_BY_DIRECTION':
      return {
        ...state,
        sortBy: 'direction',
        sorted: !state.sorted
      }
    case 'SORT_BY_R':
      return {
        ...state,
        sortBy: 'r',
        sorted: !state.sorted
      }
    case 'SORT_BY_OUTCOME':
      return {
        ...state,
        sortBy: 'outcome',
        sorted: !state.sorted
      }
    case 'SORT_BY_OPENED':
      return {
        ...state,
        sortBy: 'opened',
        sorted: !state.sorted
      }
    case 'SORT_BY_CLOSED':
      return {
        ...state,
        sortBy: 'closed',
        sorted: !state.sorted
      }
    case 'SORT_BY_PERIOD':
      return {
        ...state,
        sortBy: 'period',
        sorted: !state.sorted
      }
    case 'SORT_BY_EXECUTION':
      return {
        ...state,
        sortBy: 'execution',
        sorted: !state.sorted
      }
    case 'SORT_BY_MANAGEMENT':
      return {
        ...state,
        sortBy: 'management',
        sorted: !state.sorted
      }
  }
}

export default filterReducer