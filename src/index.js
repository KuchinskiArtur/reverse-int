module.exports = function reverse (n) {
    const mathNumber = Math.abs(n)
  const strNum = mathNumber + ''
  const reverseArray = strNum.split('').reverse().join('')
  return +reverseArray
}
