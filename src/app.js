
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStore from './store/store'
import './style/style.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()
console.log(store.getState())

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
