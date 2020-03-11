import { createStore } from 'redux'
import combinedApp from '../reducers/combinedApp'

const store = createStore(combinedApp)

export default store