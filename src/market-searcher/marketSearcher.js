const marketSearcher = (trades, { searchText, sortBy }) => {
  return trades.filter((trade) => {
    return trade.market.toLowerCase().includes(searchText.toLowerCase())
  }).sort((a, b) => {
    switch (sortBy) {
      case 'market':
        return a.market > b.market ? 1 : -1
      case 'direction':
        return a.direction > b.direction ? 1 : -1
      case 'opened':
        return a.opened > b.opened ? 1 : -1
      case 'closed':
        return a.closed > b.closed ? 1 : -1
      case 'outcome':
        return a.outcome > b.outcome ? 1 : -1
      case 'r':
        return a.riskReward > b.riskReward ? 1 : - 1
    }
  })
}

export default marketSearcher
