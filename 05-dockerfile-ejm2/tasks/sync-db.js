let times = 0

const syncDb = () => {
  times++
  console.log('cada 5s: ', times)

  return times
}

module.exports = {
  syncDb
}