const getTotal = (trades, key) =>
  trades.reduce((total, trade) => total + trade[key], 0).toFixed(2)

const getAvarage = (trades, key) =>
  (getTotal(trades, key) / trades.length).toFixed(2)

const sortBy = (trades, key) =>
  trades.sort((a, b) => a[key] > b[key] ? 1 : -1)

const getLowest = (trades, key) =>
  trades.length && sortBy(trades, key)[0][key]

const getHighest = (trades, key) =>
  trades.length && sortBy(trades, key)[trades.length - 1][key]


export { getAvarage, getTotal, getLowest, getHighest, sortBy }

