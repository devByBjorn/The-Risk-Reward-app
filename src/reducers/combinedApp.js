import { combineReducers } from 'redux'
import filters from './filterReducer'
import trades from './tradeReducer'
import demons from './demonReducer'

const combinedApp = combineReducers({
  filters,
  trades,
  demons
})

export default combinedApp