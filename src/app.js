import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import store from './store/store'
import { addTrade, deleteTrade } from './actions/tradeActions'
import './style/style.scss'
import marketSearcher from './market-searcher/marketSearcher'
import { searchByMarket } from './actions/filterActions'

store.subscribe(() => {
  const state = store.getState()
  const getSearchedMarket = marketSearcher(state.trades, state.filters)
  console.log('search result:', getSearchedMarket)
})

const unsubscribe = store.subscribe(() => console.log(store.getState()))


store.dispatch(addTrade({ direction: 'long', market: 'dax', entry: 12800, stop: 12700, target: 13000 }))
store.dispatch(addTrade({ direction: 'short', market: 'DOW', entry: 11500, stop: 11700, target: 9000 }))
store.dispatch(searchByMarket('dax'))
store.dispatch(searchByMarket('d'))
store.dispatch(searchByMarket('do'))

unsubscribe()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))

