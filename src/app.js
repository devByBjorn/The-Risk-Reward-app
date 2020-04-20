
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './router/AppRouter'
import configureStore from './store/store'
import './style/style.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'
import CssBaseline from '@material-ui/core/CssBaseline'
import { addTrade } from './actions/tradeActions'
import uuid from 'uuid'
import './firebase/firebase'

const store = configureStore()

store.subscribe(() => {
  const state = store.getState()
})

const unsubscribe = store.subscribe(() => console.log(store.getState()))


store.dispatch(addTrade({
  closed: 3,
  direction: "long",
  entry: "11850",
  id: uuid(),
  market: "DAX",
  opened: 1,
  outcome: "win",
  period: 2,
  rewardToRisk: 8,
  setup: "ib low and above",
  status: "closed",
  stop: "11825",
  target: "12050",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))

store.dispatch(addTrade({
  closed: 5,
  direction: "short",
  entry: "10",
  id: uuid(),
  market: "DAX",
  opened: 2,
  outcome: "win",
  period: 3,
  rewardToRisk: 1,
  setup: "ib high and above",
  status: "closed",
  stop: "12",
  target: "8",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 9,
  direction: "short",
  entry: "10",
  id: uuid(),
  market: "DAX",
  opened: 8,
  outcome: "loss",
  period: 1,
  rewardToRisk: -1,
  setup: "ib low and above",
  status: "closed",
  stop: "12",
  target: "8",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "10",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "loss",
  period: 7,
  rewardToRisk: -0.5,
  setup: "ib low and above",
  status: "closed",
  stop: "11",
  target: "8",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "loss",
  period: 7,
  rewardToRisk: -0.8,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))
store.dispatch(addTrade({
  closed: 12,
  direction: "long",
  entry: "25",
  id: uuid(),
  market: "DAX",
  opened: 5,
  outcome: "scratch",
  period: 7,
  rewardToRisk: 0,
  setup: "ib high and above",
  status: "closed",
  stop: "22",
  target: "35",
  conclusion: {
    execution: "good",
    improveExecution: "",
    improveManagement: "",
    management: "good",
    whyExecution: "",
    whyManagement: "",
  }
}))

unsubscribe()

const app = (
  <Provider store={store}>
    {/*  <CssBaseline />*/}
    <AppRouter />
  </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
