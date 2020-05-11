const formTime = (milliSeconds) => {
  let seconds = Math.floor((milliSeconds / 1000) % 60)
  let minutes = Math.floor((milliSeconds / (1000 * 60)) % 60)
  let hours = Math.floor((milliSeconds / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? '0' + hours : hours
  minutes = (minutes < 10) ? '0' + minutes : minutes
  seconds = (seconds < 10) ? '0' + seconds : seconds

  return `${hours}:${minutes}:${seconds}`
}

export default formTime