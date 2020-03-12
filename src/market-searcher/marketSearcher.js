const marketSearcher = (trades, { searchText }) => {
  return trades.filter((trade) => trade.market.toLowerCase().includes(searchText.toLowerCase()))
}

export default marketSearcher
