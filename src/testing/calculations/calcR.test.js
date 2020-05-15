import { trades } from '../fixtures/trades'
import { getTotal, getAvarage, getLowest, getHighest } from '../../calculations/calcR'

test('should return total rMultiple of trades array', () => {
  expect(getTotal(trades, 'rMultiple')).toBe(3)
})

test('should return average of rMultiple in trades', () => {
  expect(getAvarage(trades, 'rMultiple')).toBe(1)
})

test('should return lowest (-1) of rMultiples in trades object', () => {
  expect(getLowest(trades, 'rMultiple')).toBe(-1)
})

test('should return highest rMultiple(2) fof trades array', () => {
  expect(getHighest(trades, 'rMultiple')).toBe(2)
})