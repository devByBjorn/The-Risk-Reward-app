// COUNT LISTS
const getObjectCountList = (array) =>
  array.length > 0
    ? array.reduce((acc, item) => {
      const count = acc[item] || 0
      return {
        ...acc,
        [item]: count + 1
      }
    }, {})
    : false

const getMostOcurredKey = (list) =>
  !list
    ? false
    : Object.keys(list).
      reduce((a, b) => list[a] > list[b] ? a : b)


const getLeastOcurredKey = (list) =>
  !list
    ? false
    : Object.keys(list).
      reduce((a, b) => list[a] < list[b] ? a : b)


const objListToArr = (objList) => {
  const arr = []

  for (let [key, value] of Object.entries(objList)) {
    arr.push([key, value].join(' : '));
  }

  return arr
}

export { getObjectCountList, getMostOcurredKey, getLeastOcurredKey, objListToArr }