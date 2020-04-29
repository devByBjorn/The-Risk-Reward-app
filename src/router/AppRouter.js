import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Header from '../components/Header'
import IndexPage from '../components/IndexPage'

import TradeAddPage from '../components/TradeAddPage'
import TradeEditPage from '../components/TradeEditPage'
import TradeTablePage from '../components/TradeTablePage'
import TradeStatsPage from '../components/TradeStatsPage'

import Page404 from '../components/Page404'
import WhatIsR from '../components/WhatIsRPage'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/trades" component={TradeTablePage} />
        <Route path="/add-trade" component={TradeAddPage} />
        <Route path="/edit-trade/:id" component={TradeEditPage} />
        <Route path="/trade-stats" component={TradeStatsPage} />
        <Route path="/what" component={WhatIsR} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter