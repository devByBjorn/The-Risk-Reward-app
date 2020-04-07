import React, { useContext } from 'react'
import WatchListContext from '../contexts/WatchListContext'
import WatchListTableRow from './WatchListTableRow'


const WatchListTable = () => {
  const { items } = useContext(WatchListContext)
  return (
    <table width={styles.width}>
      <thead>
        <tr>
          <th>Market</th>
          <th>Context</th>
          <th>Buy Areas</th>
          <th>Sell Areas</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => {
          return <WatchListTableRow item={item} />
        })}
      </tbody>
    </table>
  )
}

export default WatchListTable
