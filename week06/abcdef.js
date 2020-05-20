function match(string) {
  for (const c of string) {
    if(c==='a') return true
  }
  return false
}

function matchAB(string) {
  let foundA = false
  for (const c of string) {
    if (c === 'a') {
      foundA = true
    } else if (foundA && c === 'b') {
      return true
    } else {
      foundA = false
    }
  }
  return false
}

function matchABCDEF(string) {
  let state = start
  for (const c of string) {
    state = state(c)
  }
  return state === end
}

function start(c) {
  return c==='a' ? foundA : start
}

function end(c) {
  return end;
}
function start(c) {
  return c === 'a' ? foundA : start
}
function foundA(c) {
  return c === 'b' ? foundB : start(c)
}
function foundB(c) {
  return c === 'c' ? foundC : start(c)
}
function foundC(c) {
  return c === 'd' ? foundD : start(c)
}
function foundD(c) {
  return c === 'e' ? foundD : start(c)
}
function foundE(c) {
  return c === 'f' ? end : start(c)
}

console.log(matchABCDEF('abcdefg'))