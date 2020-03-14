export const sortNum = (trades, tradesProp) => {
  return [...trades].sort((a, b) =>
    a[tradesProp] > b[tradesProp] ? 1 : -1)
}

export const reSortNum = (trades, tradesProp) => {
  return [...trades].sort((a, b) =>
    b[tradesProp] > a[tradesProp] ? 1 : -1)
}