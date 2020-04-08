import React, { useReducer } from 'react'
import WatchListForm from '../forms/WatchListForm'
import WatchListTable from '../tables/WatchListTable'
import watchListReducer from '../../../reducers/watchListReducer'
import WatchListContext from '../../contexts/WatchListContext'

const WatchListPage = () => {
  const [items, dispatch] = useReducer(watchListReducer, [])
  return (
    <WatchListContext.Provider value={{ items, dispatch }}>
      <h1>Watchlist</h1>
      <WatchListForm />
      <WatchListTable />
    </WatchListContext.Provider>
  )
}

export default WatchListPage