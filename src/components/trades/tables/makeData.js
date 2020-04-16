import namor from 'namor'
import moment from 'moment'
const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  const statusChance = Math.random()

  const directions = ['long', 'short']
  const setups = ['ib low', 'ib high', 'ib range', 'ib breakout']
  const outcomes = ['win', 'loss', 'scratch']

  return {
    market: 'DAX',
    direction: directions[Math.floor(Math.random() * directions.length)],
    setup: setups[Math.floor(Math.random() * setups.length)],
    rewardToRisk: Math.floor(Math.random() * 10),
    opened: '2019-01-12',
    closed: '2019-01-13',
    outcome: outcomes[Math.floor(Math.random() * outcomes.length)]
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}