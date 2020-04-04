import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../components/Header'
import IndexPage from '../components/pages/IndexPage'
import TradeAddPage from '../components/pages/TradeAddPage'
import TradeEditPage from '../components/pages/TradeEditPage'

import TradeTablePage from '../components/pages/TradeTablePage'
import DemonFinderPage from '../components/pages/DemonFinderPage'
import DemonAddPage from '../components/pages/DemonAddPage'
import DemonEditPage from '../components/pages/DemonEditPage'
import Page404 from '../components/pages/Page404'
import WhatIsR from '../components/pages/WhatIsRPage'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/trades" component={TradeTablePage} />
        <Route path="/add-trade" component={TradeAddPage} />
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