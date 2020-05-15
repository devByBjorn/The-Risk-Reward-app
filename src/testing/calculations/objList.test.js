import {
  getObjectCountList,
  getMostOcurredKey,
  getLeastOcurredKey,
  objListToArr
} from '../../calculations/objLists'
import { trades } from '../fixtures/trades'


test('should return object with array item name as prop and count as key', () => {
  const arr = ['blue', 'red', 'green', 'blue', 'green', 'green']
  expect(getObjectCountList(arr)).toEqual({
    green: 3,
    blue: 2,
    red: 1,
  })
})

test('should return most occured key from object list above', () => {
  const arr = ['blue', 'red', 'green', 'blue', 'green', 'green']
  const objList = getObjectCountList(arr)

  expect(getMostOcurredKey(objList)).toBe('green')
})

test('should return most occured key from object list above', () => {
  const arr = ['blue', 'red', 'green', 'blue', 'green', 'green']
  const objList = getObjectCountList(arr)

  expect(getLeastOcurredKey(objList)).toBe('red')
})

test('should return an arr with values from obj list', () => {
  const arr = ['blue', 'red', 'green', 'blue', 'green', 'green']
  const objList = getObjectCountList(arr)
  expect(objListToArr(objList)).toEqual(["blue : 2", "red : 1", "green : 3"])
})

