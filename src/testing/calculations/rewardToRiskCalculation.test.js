import { calculateRisk, calculateReward } from '../../calculations/rewardToRiskCalculation'

const tradeLong = {
  entryL: 4,
  stopL: 2,
  targetL: 12,
}
const { entryL, stopL, targetL } = tradeLong

test('should calculate reward for trade direction long', () => {
  expect(calculateReward(entryL, stopL, targetL, 'long')).toBe('4.00')
})
test('should calculate risk for trade direction short', () => {
  expect(calculateRisk(entryS, stopS, targetS, 'long')).toBe(-1)
})

const tradeShort = {
  entryS: 4,
  stopS: 6,
  targetS: 2,
}
const { entryS, stopS, targetS } = tradeShort

test('should calculate reward for trade direction short', () => {
  expect(calculateReward(entryS, stopS, targetS, 'short')).toBe('1.00')
})
test('should calculate risk for trade direction short', () => {
  expect(calculateRisk(entryS, stopS, targetS, 'short')).toBe(-1)
})