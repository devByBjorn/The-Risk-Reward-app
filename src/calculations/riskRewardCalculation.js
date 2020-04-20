const calculatePositiveR = (entry, stop, target, direction) => {
  let positiveR

  direction === 'long'
    ? positiveR = (target - entry) / (entry - stop)
    : positiveR = (entry - target) / (stop - entry)

  return Math.abs(positiveR).toFixed(2)
}

const calculateNegativeR = (entry, stop, target, direction) => {
  let negativeR

  direction === 'long'
    ? negativeR = (entry - stop) / (target - entry)
    : negativeR = (stop - entry) / (entry - target)

  return -Math.abs(negativeR).toFixed(2)
}

export { calculateNegativeR, calculatePositiveR }