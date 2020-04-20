import database from '../firebase/firebase'

const addTrade = (trade) => ({
  type: 'ADD_TRADE',
  trade
})

const startAddTrade = (tradeData = {}) => {
  return (dispatch) => {
    const {
      direction = '',
      market = '',
      entry = 0,
      stop = 0,
      target = 0,
      status = '',
      setup = '',
      opened = 0,
      closed = 0,
      period = '',
      outcome = '',
      rewardToRisk = '',
      negativeR = '',
      positiveR = '',
      conclusion = {}
    } = tradeData

    const trade = {
      direction,
      market,
      entry,
      stop,
      target,
      status,
      setup,
      opened,
      closed,
      period,
      outcome,
      rewardToRisk,
      negativeR,
      positiveR,
      conclusion
    }

    database.ref('trades')
      .push(trade)
      .then((ref) => {
        dispatch(addTrade({
          id: ref.key,
          ...trade
        }))
      })
  }
}

const editTrade = (id, updates) => ({
  type: 'EDIT_TRADE',
  id,
  updates
})

const deleteTrade = ({ id }) => ({
  type: 'DELETE_TRADE',
  id
})

export { addTrade, editTrade, deleteTrade, startAddTrade }