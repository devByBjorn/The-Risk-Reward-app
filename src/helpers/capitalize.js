const capitalize = (str) =>
  str
    .split('')
    .slice(0, 1)
    .join('')
    .toUpperCase() + str.slice(1, str.length)

export { capitalize }