const calculateReward = (entry, stop, target, direction) => {
  let reward

  direction === 'long'
    ? reward = (target - entry) / (entry - stop)
    : reward = (entry - target) / (stop - entry)

  return Math.abs(reward).toFixed(2)
}

const calculateRisk = (entry, stop, target, direction) => {
  let risk

  direction === 'long'
    ? risk = (entry - stop) / (target - entry)
    : risk = (stop - entry) / (entry - target)

  return -Math.abs(risk).toFixed(2)
}

export { calculateRisk, calculateReward }