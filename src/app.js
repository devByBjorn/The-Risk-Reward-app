
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStore from './store/store'
import './style/style.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { addTrade } from './actions/tradeActions'
import uuid from 'uuid'
import './firebase/firebase'

const store = configureStore()

// store.subscribe(() => {
//   const state = store.getState()
// })

// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// unsubscribe()

const app = (
  <Provider store={store}>
    {/*  <CssBaseline />*/}
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
