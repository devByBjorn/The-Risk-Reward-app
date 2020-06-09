
import { getKeysArr, getArrOfArrsTrades } from '../../calculations/calcBasedOnKey'
import { trades } from '../fixtures/trades'

test('should return array base on object key', () => {
  expect(getKeysArr(trades, 'setup')).toEqual(
    ["ibl tick under", "ibh tick above", "weekly low break"]
  )
})


// test('should return an array of arrays with no duplicates based on key', () => {
//   const tradesArr = [
//     {
//       setup: 'ibl tick below',
//       market: 'dax',
//     }, {
//       setup: 'ibl tick below', // duplicate
//       market: 'dax',
//     }, {
//       setup: 'ibh tick above',
//       market: 'dax',
//     },
//   ]

//   const allInstansOfKey = getKeysArr(trades, 'setup')
//   expect(getArrOfArrsTrades(tradesArr, allInstansOfKey, 'setup')).toEqual([
//     [{
//       setup: 'ibl tick below',
//       market: 'dax',
//     }], [{
//       setup: 'ibh tick above',
//       market: 'dax',
//     }],
//   ])
// })