import { combineReducers } from 'redux'
import filters from './filterReduser'
import trades from './tradeReduser'

const combinedApp = combineReducers({
  filters,
  trades
})

export default combinedApp