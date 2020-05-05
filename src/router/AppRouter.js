import React, { Fragment } from "react"
import {
  Router,
  Switch,
  Route,
} from "react-router-dom"
import createHistory from 'history/createBrowserHistory'
import LogedInRoute from './LogedInRoute'
import LogedOutRoute from './LogedOutRoute'


import LoginPage from '../components/LoginPage'
import TradeAddPage from '../components/TradeAddPage'
import TradeEditPage from '../components/TradeEditPage'
import TradeTablePage from '../components/TradeTablePage'
import TradeStatsPage from '../components/TradeStatsPage'
import Page404 from '../components/Page404'


export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <Fragment>
      <Switch>
        <LogedOutRoute path="/" component={LoginPage} exact={true} />
        <LogedInRoute path="/trades" component={TradeTablePage} exact={true} />
        <LogedInRoute path="/add-trade" component={TradeAddPage} />
        <LogedInRoute path="/edit-trade/:id" component={TradeEditPage} />
        <LogedInRoute path="/trade-stats" component={TradeStatsPage} />
        <Route component={Page404} />
      </Switch>
    </Fragment>
  </Router>
)

export default AppRouter