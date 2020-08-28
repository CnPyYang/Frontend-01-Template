const rule = /^(\.\d+|(0|[1-9]\d*)(\.\d*)?)([eE][-\+]?\d+)?|(0[bB][01]*)|(0[oO][0-7]*)|0[xX][0-9a-fA-F]*/
var str = '099.2191';
console.log(rule.test(str));