import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import filters from '../reducers/filterReducer'
import trades from '../reducers/tradeReducer'
import thunk from 'redux-thunk'

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      trades,
      filters
    }),
    composeEnhencers(applyMiddleware(thunk))
  )
  return store
}
