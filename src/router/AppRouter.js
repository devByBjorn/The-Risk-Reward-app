import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from '../components/Header'
import IndexPage from '../components/IndexPage'

import TradeAddPage from '../components/trades/pages/TradeAddPage'
import TradeEditPage from '../components/trades/pages/TradeEditPage'
import TradeTablePage from '../components/trades/pages/TradeTablePage'

import TradeStatsPage from '../components/trade-stats/pages/TradeStatsPage'

import DemonFinderPage from '../components/demon-finder/pages/DemonFinderPage'
import DemonAddPage from '../components/demon-finder/pages/DemonAddPage'
import DemonEditPage from '../components/demon-finder/pages/DemonEditPage'

import WatchListPage from '../components/watchlist/pages/WatchListPage'

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
        <Route path="/watchlist" component={WatchListPage} />
        <Route path="/demons" component={DemonFinderPage} />
        <Route path="/add-demon" component={DemonAddPage} />
        <Route path="/edit-demon/:id" component={DemonEditPage} />
        <Route path="/what" component={WhatIsR} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter