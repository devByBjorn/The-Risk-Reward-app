import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Header from '../components/Header'
import IndexPage from '../components/IndexPage'
import TradeAdd from '../components/TradeAddPage'
import TradeEdit from '../components/TradeEditPage'
import TradeTable from '../components/TradeTablePage'
import Page404 from '../components/Page404'
import WhatIsR from '../components/WhatIsRPage'

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/trades" component={TradeTable} />
        <Route path="/add" component={TradeAdd} />
        <Route path="/edit:id" component={TradeEdit} />
        <Route path="/what" component={WhatIsR} />
        <Route component={Page404} />
      </Switch>
    </div>
  </Router>
)

export default AppRouter