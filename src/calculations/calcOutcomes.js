const getOutcome = (trades, outcome) =>
  trades.filter((trade) => trade.outcome === outcome)

const getOutcomeCount = (trades, outcome) =>
  getOutcome(trades, outcome).length

const getHitRatio = (trades) =>
  ((getOutcomeCount(trades, 'win') / trades.length) * 100).toFixed(2)

export { getOutcome, getOutcomeCount, getHitRatio }