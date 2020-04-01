
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import store from './store/store'
import './style/style.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

store.subscribe(() => {
  const state = store.getState()
  console.log(state)
})

const unsubscribe = store.subscribe(() => console.log(store.getState()))


unsubscribe()

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
