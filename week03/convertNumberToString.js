function convertNumberToString(num) {
  var str = ''
  if (Number.isNaN(num) || Number.isFinite(num) || typeof num !== 'number') {
    return num
  }
  return str + num
}

console.log(convertNumberToString(0b11))
