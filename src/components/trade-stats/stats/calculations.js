// R 
export const getTotalR = (trades) =>
  trades.reduce((total, trade) => total + trade.rewardToRisk, 0)

export const getAvarageR = (trades) =>
  getTotalR(trades) / trades.length

const sortByR = (trades) =>
  trades.sort((a, b) => a.rewardToRisk > b.rewardToRisk ? 1 : -1)

export const getLowestR = (trades) =>
  sortByR(trades)[0].rewardToRisk

export const getHighestR = (trades) =>
  sortByR(trades)[trades.length - 1].rewardToRisk


// SET UPS
export const getSetupsArray = (trades) =>
  trades.map((trade) => trade.setup)

export const outcomePerSetup = (trades, outcome) => {
  const tradesByOutcom = getOutcome(trades, outcome)
  const outcomeSetups = tradesByOutcom.map((trade) => trade.setup)
  const outcomeCountList = getObjectCountList(outcomeSetups)
  const mostCountedSetup = getMostOcurredKey(outcomeCountList)
  const arrOfMostCountedSetup = trades.filter((trade) =>
    trade.outcome === outcome
    && trade.setup.toLowerCase() === mostCountedSetup.toLowerCase())

  return {
    mostCountedSetup,
    arrOfMostCountedSetup
  }
}

// OUTCOMES
export const getOutcome = (trades, outcome) =>
  trades.filter((trade) => trade.outcome === outcome)

export const getOutcomeCount = (trades, outcome) =>
  getOutcome(trades, outcome).length

export const getHitRatio = (trades) =>
  (getOutcomeCount(trades, 'win') / trades.length) * 100


// COUNT LISTS
export const getObjectCountList = (array) =>
  array.length > 0
    ? array.reduce((acc, item) => {
      const count = acc[item] || 0

      return {
        ...acc,
        [item]: count + 1
      }

    }, {})
    : false

export const getMostOcurredKey = (list) =>
  !list
    ? false
    : Object.keys(list).
      reduce((a, b) => list[a] > list[b] ? a : b)

export const getLeastOcurredKey = (list) =>
  !list
    ? false
    : Object.keys(list).
      reduce((a, b) => list[a] < list[b] ? a : b)

export const objListToArr = (listAllSetups) => {
  const arr = []
  for (let [key, value] of Object.entries(listAllSetups)) {
    arr.push([key, value].join(' : '));
  }
  return arr
}