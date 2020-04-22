function writeUTF8 (str) {
  var back = [];
  for (var i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    if (0x80 > code) {
      back.push(code.toString(16))
    } else {
      var tmp = encodeURIComponent(str[i]).split('%')
      tmp.shift()
      back.push(tmp)
    }
  }
  return back
}

