import database from '../firebase/firebase'

const addTrade = (trade) => ({
  type: 'ADD_TRADE',
  trade
})

const addFirebaseTrade = (tradeData = {}) => dispatch => {
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

  return database.ref('trades')
    .push(trade)
    .then((ref) => {
      dispatch(addTrade({
        id: ref.key,
        ...trade
      }))
    })
}


const setTrades = (trades) => ({
  type: 'SET_TRADES',
  trades
})

const setFireBaseTrades = () => dispatch =>
  database
    .ref('trades')
    .once('value')
    .then((snapshot) => {
      const trades = []

      snapshot.forEach((childSnapshot) => {
        trades.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      })

      dispatch(setTrades(trades))
    })


const editTrade = (id, updates) => ({
  type: 'EDIT_TRADE',
  id,
  updates
})

const editFirebaseTrade = (id, updates) => dispatch =>
  database
    .ref(`trades/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editTrade(id, updates))
    })



const deleteTrade = ({ id }) => ({
  type: 'DELETE_TRADE',
  id
})

const deleteFirebaseTrade = ({ id }) => dispatch =>
  database
    .ref(`trades/${id}`)
    .remove()
    .then(() => {
      dispatch(deleteTrade({ id }))
    })



export {
  addTrade, editTrade, deleteTrade, setTrades,
  addFirebaseTrade, setFireBaseTrades,
  deleteFirebaseTrade, editFirebaseTrade
}