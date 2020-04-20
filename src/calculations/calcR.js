const getTotalR = (trades) =>
  trades.reduce((total, trade) => total + trade.rewardToRisk, 0)

const getAvarageR = (trades) =>
  (getTotalR(trades) / trades.length).toFixed(2)

const sortByR = (trades) =>
  trades.sort((a, b) => a.rewardToRisk > b.rewardToRisk ? 1 : -1)


const getLowestR = (trades) =>
  trades.length && sortByR(trades)[0].rewardToRisk

const getHighestR = (trades) =>
  trades.length && sortByR(trades)[trades.length - 1].rewardToRisk


export { getAvarageR, getTotalR, getLowestR, getHighestR, sortByR }

