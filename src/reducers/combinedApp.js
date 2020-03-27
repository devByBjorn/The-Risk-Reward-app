import { combineReducers } from 'redux'
import filters from './filterReducer'
import trades from './tradeReducer'

const combinedApp = combineReducers({
  filters,
  trades
})

export default combinedApp