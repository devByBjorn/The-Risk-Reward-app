import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import filters from '../reducers/filterReducer'
import trades from '../reducers/tradeReducer'
import auth from '../reducers/authFirebaseReducer'


const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      trades,
      filters,
      auth
    }),
    composeEnhencers(applyMiddleware(thunk))
  )
  return store
}
