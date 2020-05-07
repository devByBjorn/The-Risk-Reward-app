
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components"
import { MuiThemeProvider } from "@material-ui/core/styles"
import AppRouter, { history } from './router/AppRouter'
import configureStore from './store/store'
import { setFireBaseTrades } from './actions/tradeActions'
import { login, logout } from './actions/authFirebase'
import { firebase } from './firebase/firebase'
//import 'normalize.css/normalize.css'
import './style/style.scss'
import CssBaseline from './components_style/BaseGlobalStyle'
import typoTheme from './components_style/typoTheme'
import CircularLoader from './components_style/LoaderCircular'
import Theme from './components_style/Theme'

const store = configureStore()

const app = (

  <MuiThemeProvider theme={typoTheme}>
    <CssBaseline />
    <Theme>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </Theme>
  </MuiThemeProvider>
)

let appRendered = false
const renderApp = () => {
  if (!appRendered) {
    ReactDOM.render(app, document.getElementById('app'))
    appRendered = true
  }
}

ReactDOM.render(<CircularLoader />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(setFireBaseTrades()).then(() => {
      renderApp()
      if (history.location.pathname === '/') {
        history.push('/trades')
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push('/')
  }
})

// store.dispatch(setFireBaseTrades()).then(() => {
//   ReactDOM.render(app, document.getElementById('app'))
// })

