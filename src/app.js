import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './router/AppRouter'
import store from './store/store'
import { addTrade, deleteTrade } from './actions/tradeActions'
import './style/style.scss'

console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(addTrade({ direction: 'long', market: 'dax', entry: 12800, stop: 12700, target: 13000 }))
store.dispatch(addTrade({ direction: 'long', market: 'dax', entry: 11500, stop: 11700, target: 12000 }))

unsubscribe()
ReactDOM.render(<AppRouter />, document.getElementById('app'))


