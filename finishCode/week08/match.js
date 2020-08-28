function match(ele, selector) {
  if (!selector || !ele.attributes) {
    return false
  }
  if (selector.charAt(0) == "#") {
    var attr = ele.attributes.filter(attr => attr.name === "id")
    if (attr && attr.value === selector.replace("#", "")) {
      return true
    }
  } else if (selector.charAt(0) == ".") {
    var attr = ele.attributes.filter(attr => attr.name === "class")
    // 多个类名
    var attrArr = attr.value && attr.value.split(" ")
    if (attr && attrArr.includes(selector.replace(".", ""))) {
      // if(attr && attr.value===selector.replace(".","")){
      return true
    }
  } else {
    if (ele.tagName === selector) {
      return true
    }
  }
  return false
}