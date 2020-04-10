const getTotalR = (trades) =>
  trades.reduce((total, trade) => total + trade.rewardToRisk, 0)

const getAvarageR = (trades) =>
  getTotalR(trades) / trades.length

const sortByR = (trades) =>
  trades.sort((a, b) => a.rewardToRisk > b.rewardToRisk ? 1 : -1)


const getLowestR = (trades) =>
  trades.length && sortByR(trades)[0].rewardToRis

const getHighestR = (trades) =>
  trades.length && tradessortByR(trades)[trades.length - 1].rewardToRisk


export { getAvarageR, getTotalR, getLowestR, getHighestR, sortByR }

//getHighestR, getLowestR, 