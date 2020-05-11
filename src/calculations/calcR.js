const getTotal = (trades, key) =>
  parseFloat(trades.reduce((total, trade) => total + trade[key], 0).toFixed(2))

const getAvarage = (trades, key) =>
  parseFloat((getTotal(trades, key) / trades.length).toFixed(2))

const sortBy = (trades, key) =>
  trades.sort((a, b) => a[key] > b[key] ? 1 : -1)

const getLowest = (trades, key) =>
  parseFloat(trades.length && sortBy(trades, key)[0][key].toFixed(2))

const getHighest = (trades, key) =>
  parseFloat(trades.length && sortBy(trades, key)[trades.length - 1][key].toFixed(2))


export { getAvarage, getTotal, getLowest, getHighest, sortBy }

