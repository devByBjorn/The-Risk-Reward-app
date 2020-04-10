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