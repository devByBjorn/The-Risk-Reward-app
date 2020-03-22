import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import store from './store/store'
import './style/style.scss'
import marketSearcher from './market-searcher/marketSearcher'

store.subscribe(() => {
  const state = store.getState()
  // const getSearchedMarket = marketSearcher(state.trades, state.filters)
  // console.log('search result:', getSearchedMarket)
  console.log('sort', state.trades.sort((a, b) => b.rewardToRisk > a.rewardToRisk ? 1 : -1)[0].rewardToRisk)
})

const unsubscribe = store.subscribe(() => console.log(store.getState()))


// store.dispatch(addTrade({ direction: 'short', market: 'JMX', entry: 1500, stop: 1700, target: 900, outcome: 'loser', riskReward: 2 }))
// store.dispatch(addTrade({ direction: 'long', market: 'Bax', entry: 12800, stop: 12700, target: 13000, outcome: 'Winner', riskReward: 8 }))
// store.dispatch(addTrade({ direction: 'short', market: 'AMX', entry: 1500, stop: 1700, target: 900, outcome: 'loser', riskReward: 1 }))
// store.dispatch(addTrade({ direction: 'long', market: 'Bax', entry: 12800, stop: 12700, target: 13000, outcome: 'winner', riskReward: 4 }))



unsubscribe()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))

