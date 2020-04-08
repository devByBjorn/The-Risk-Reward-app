import { createStore } from 'redux'
import combinedApp from '../reducers/combinedApp'

export default () => createStore(combinedApp)
