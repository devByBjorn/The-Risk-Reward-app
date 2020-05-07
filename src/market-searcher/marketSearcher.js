export const closedTradeSearch = (trades, { searchText }) =>
  trades
    .filter((trade) => trade.status === 'closed'
      && trade.market.toLowerCase().includes(searchText.toLowerCase()))

export const activeTradeSearch = (trades, { searchText }) =>
  trades
    .filter((trade) => trade.status === 'active'
      && trade.market.toLowerCase().includes(searchText.toLowerCase()))

export const pendingTradeSearch = (trades, { searchText }) =>
  trades
    .filter((trade) => trade.status === 'pending'
      && trade.market.toLowerCase().includes(searchText.toLowerCase()))



