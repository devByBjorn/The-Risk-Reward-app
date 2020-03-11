import { combineReducers } from 'redux'
import filters from './filterRecuser'
import trades from './tradeReduser'

const combinedApp = combineReducers({
  filters,
  trades
})

export default combinedApp