export const filterByStatus = (trades, status) =>
  trades.filter((trade) => trade.status === status)