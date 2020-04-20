import React, { useContext } from 'react'
import WatchListContext from '../../contexts/WatchListContext'
import { TrashIcon } from '../../../icons/IconsComponents'
import Btn from '../../utilities/Btn'

const WatchListTableRow = ({ item }) => {
  const { dispatch } = useContext(WatchListContext)

  const deleteItem = () => {
    dispatch({ type: 'DELETE_ITEM', id: item.id })
  }

  return (
    <tr>
      <td>{item.market}</td>
      <td>{item.context}</td>
      <td>{item.buyAreas}</td>
      <td>{item.sellAreas}</td>
      <td>
        <Btn
          text={<TrashIcon />}
          onClick={deleteItem}
        /></td>
    </tr>
  )
}

export default WatchListTableRow

