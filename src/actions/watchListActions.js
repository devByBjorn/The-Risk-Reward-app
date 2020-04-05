import uuid from 'uuid'

const addWatchListItem = ({
  market = '',
  bias = '',
  levelsToBuy = '',
  levelsToSell = '',
} = {}) => ({
  type: 'ADD_ITEM',
  item: {
    market,
    bias,
    levelsToBuy,
    levelsToSell,
    id: uuid()
  }
})

const editWatchListItem = (id, updates) => ({
  type: 'EDIT_ITEM',
  id,
  updates,
})

const deleteWathListItem = ({ id }) => ({
  type: 'DELETE_ITEM',
  id
})

export { addWatchListItem, editWatchListItem, deleteWathListItem }