
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { MuiThemeProvider } from "@material-ui/core/styles"
import AppRouter from './router/AppRouter'
import configureStore from './store/store'
import './style/style.scss'
//import 'react-dates/initialize'
//import 'react-dates/lib/css/_datepicker.css'
import { setFireBaseTrades } from './actions/tradeActions'
import './firebase/firebase'
import CssBaseline from './components_style/BaseGlobalStyle'
import typoTheme from './components_style/TypographStyled'

//import "react-datepicker/dist/react-datepicker.css"


const store = configureStore()

const app = (
  <MuiThemeProvider theme={typoTheme}>
    <CssBaseline />
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </MuiThemeProvider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(setFireBaseTrades()).then(() => {
  ReactDOM.render(app, document.getElementById('app'))
})

