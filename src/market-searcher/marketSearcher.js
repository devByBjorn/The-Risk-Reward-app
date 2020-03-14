const marketSearcher = (trades, { searchText, sortBy, sorted }) =>
  trades.filter((trade) => {
    return trade.market.toLowerCase().includes(searchText.toLowerCase())
  }).sort((a, b) => {
    if (sorted) {
      switch (sortBy) {
        case 'market':
          return a.market.toLowerCase() > b.market.toLowerCase() ? 1 : -1
        case 'direction':
          return a.direction.toLowerCase() > b.direction.toLowerCase() ? 1 : -1
        case 'outcome':
          return a.outcome.toLowerCase() > b.outcome.toLowerCase() ? 1 : -1

        // first click for numbers results in biggest first, rising order
        case 'opened':
          return b.opened > a.opened ? 1 : -1
        case 'closed':
          return b.closed > a.closed ? 1 : -1
        case 'r':
          return b.riskReward > a.riskReward ? 1 : - 1
      }
    } else {
      switch (sortBy) {
        case 'market':
          return b.market.toLowerCase() > a.market.toLowerCase() ? 1 : -1
        case 'direction':
          return b.direction.toLowerCase() > a.direction.toLowerCase() ? 1 : -1
        case 'outcome':
          return b.outcome.toLowerCase() > a.outcome.toLowerCase() ? 1 : -1

        // second click for numbers results in smallest first, falling order
        case 'opened':
          return a.opened > b.opened ? 1 : -1
        case 'closed':
          return a.closed > b.closed ? 1 : -1
        case 'r':
          return a.riskReward > b.riskReward ? 1 : - 1
      }
    }
  })


export default marketSearcher
