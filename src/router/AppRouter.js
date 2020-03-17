import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../components/Header'
import IndexPage from '../components/IndexPage'
import TradeAddPage from '../components/TradeAddPage'
import TradeEditPage from '../components/TradeEditPage'
import TradeTablePage from '../components/TradeTablePage'
import Page404 from '../components/Page404'
import WhatIsR from '../components/WhatIsRPage'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/trades" component={TradeTablePage} />
        <Route path="/add" component={TradeAddPage} />
        <Route path="/edit/:id" component={TradeEditPage} />
        <Route path="/what" component={WhatIsR} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter