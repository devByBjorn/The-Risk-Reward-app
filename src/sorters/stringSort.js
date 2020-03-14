export const sortString = (trades, tradesProp) => {
  return [...trades].sort((a, b) =>
    a[tradesProp].toLowerCase() > b[tradesProp].toLowerCase() ? 1 : -1)
}

export const reSortString = (trades, tradesProp) => {
  return [...trades].sort((a, b) =>
    b[tradesProp].toLowerCase() > a[tradesProp].toLowerCase() ? 1 : -1)
}