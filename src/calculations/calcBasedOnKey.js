import { getOutcome } from './calcOutcomes'
import { getObjectCountList, getMostOcurredKey } from './objLists'

// SET UPS
const getKeysArr = (trades, key) =>
  trades.map((trade) => trade[key])

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

function getArrOfArrsTrades(trades, ArrKeys, key) {
  const trimDuplicates = [...new Set(ArrKeys)]
  const arrayOfArrays = []

  for (let i = 0; i < trimDuplicates.length; i++) {
    arrayOfArrays.push(trades.filter((trade) =>
      trade[key] === trimDuplicates[i] && trade))
  }
  return arrayOfArrays
}

export { getKeysArr, outcomePerSetup, getArrOfArrsTrades }