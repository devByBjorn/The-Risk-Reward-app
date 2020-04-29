const formDate = (milliSeconds) => {
  const date = new Date(milliSeconds)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May',
    'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const fullYear = date.getFullYear()
  const month = months[date.getMonth()]
  const dayDate = date.getDate()

  return `${dayDate} ${month}, ${fullYear}`
}

export { formDate }