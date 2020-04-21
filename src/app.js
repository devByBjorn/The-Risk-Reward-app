
import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStore from './store/store'
// import './style/style.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import { setFireBaseTrades } from './actions/tradeActions'
import Table from './implementation_ideas/tableMUI/Table'
import AppTable from './implementation_ideas/tables/tableRender'
import './firebase/firebase'
import CssBaseline from '@material-ui/core/CssBaseline';
const store = configureStore()

const app = (
  <Provider store={store}>
    <Fragment>
      <CssBaseline />
      {/*<Table />*/}
      <AppRouter />
      {/*<AppTable />*/}
    </Fragment>
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'))

store.dispatch(setFireBaseTrades()).then(() => {
  ReactDOM.render(app, document.getElementById('app'))
})

