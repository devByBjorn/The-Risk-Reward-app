import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../components/Header'
import IndexPage from '../components/IndexPage'

import TradeChoseStatusPage from '../components/TradeChoseStatusPage'

import TradeAddPage from '../components/TradeAddFirstPage'
import TradeAddPendingPage from '../components/TradeAddPendingPage'
import TradeAddActivePage from '../components/TradeAddActivePage'
import TradeAddClosedPage from '../components/TradeAddClosedPage'
import TradeEditPage from '../components/TradeEditPage'
import TradeTablePage from '../components/TradeTablePage'
import DemonFinderPage from '../components/DemonFinderPage'
import DemonAddPage from '../components/DemonAddPage'
import DemonEditPage from '../components/DemonEditPage'
import Page404 from '../components/Page404'
import WhatIsR from '../components/WhatIsRPage'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/trades" component={TradeTablePage} />
        <Route path="/chose-trade-status" component={TradeChoseStatusPage} />
        <Route path="/add-trade" component={TradeAddPage} />
        <Route path="/add-pending-trade" component={TradeAddPendingPage} />
        <Route path="/add-active-trade" component={TradeAddActivePage} />
        <Route path="/add-closed-trade" component={TradeAddClosedPage} />
        <Route path="/edit-trade/:id" component={TradeEditPage} />
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