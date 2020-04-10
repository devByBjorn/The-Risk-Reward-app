import { getOutcome } from './calcOutcomes'
import { getObjectCountList, getMostOcurredKey } from './objLists'

// SET UPS
const getSetupsArray = (trades) =>
  trades.map((trade) => trade.setup)

const outcomePerSetup = (trades, outcome) => {
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

function getAverageRPerSetup(trades, allSetups) {
  const noDuplicateSetupName = [...new Set(allSetups)]
  const arrayOfArrays = []

  for (let i = 0; i < noDuplicateSetupName.length; i++) {
    arrayOfArrays.push(trades.filter((trade) =>
      trade.setup === noDuplicateSetupName[i] && trade))
  }
  return arrayOfArrays
}

export { getSetupsArray, outcomePerSetup, getAverageRPerSetup }