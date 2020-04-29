function convertStringToNumber(str, x = 10) {
  if (str === '') return 0
  var chars = str.split('');
  var integer = 0
  for (let i = 0; i < chars.length; i++) {
    integer = integer * x
    integer += chars[i].codePointAt(0) - 48
  }
  return integer
}

function inputStr(str) {
  if (arguments.length === 0 || str === null || str === false || str === '') {
    return 0
  } else if (str === true) {
    return 1
  } else if (str instanceof Object) {
    return NaN
  }

  const reg2 = /^0[bB][01]+$/
  const reg8 = /^0[oO][0-7]+$/
  const reg16 = /^0[xX][0-9a-fA-F]+$/
  if (reg2.test(str)) {
    return convertStringToNumber(str.substring(2),2)
  } else if (reg8.test(str)) {
    return convertStringToNumber(str.substring(2), 8)
  } else if (reg16.test(str)) {
    return convertStringToNumber(str.substring(2), 16)
  } else {
    return convertStringToNumber10(str)
  }
}

function convertStringToNumber10 (str) {
  var exponent = 1
  var decimal = 0
  if (str.includes('e') || str.includes('E')) {
    const arr = str.split(/e/i)
    str = arr[0]
    let exp = arr[1]
    if (/^\-[0-9]+$/.test(exp)) {
      exponent = Math.pow(0.1, convertStringToNumber(exp.split('-')[1]))
    } else if (/^\+?[0-9]+$/.test(exp)) {
      const tmp = exp.split('+')
      exponent = Math.pow(10, convertStringToNumber(tmp[tmp.length - 1]))
    } else {
      return NaN
    }
  }
  if (str.includes('.')) {
    const arr = str.split('.')
    str = arr[0]
    let dec = arr[1]
    if (dec !== '' && /^[0-9]+$/.test(dec)) {
      decimal = convertStringToNumber(dec) * Math.pow(0.1, dec.length)
    } else {
      return NaN
    }
  }
  if (str === '' || /^[0-9]+$/.test(str)) return (convertStringToNumber(str) + decimal) * exponent
  return NaN
}

console.log(inputStr('0b12'))
console.log(inputStr('0b10'))
console.log(inputStr('12.1e3'))
console.log(inputStr('.2'))
console.log(inputStr('3424.2'))
