import { getOutcome, getOutcomeCount, getWinRatio } from '../../calculations/calcOutcomes'
import { trades } from '../fixtures/trades'

test('should filter trades based on outcome', () => {
  expect(getOutcome(trades, 'win')).toEqual([trades[0], trades[2]])
})

test('should return count of trades base on outcome', () => {
  expect(getOutcomeCount(trades, 'win')).toBe(2)
})

test('should return win ratio of trades with fiexed decimals to two', () => {
  expect(getWinRatio(trades)).toBe(66.67)
})