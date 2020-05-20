const EOF = Symbol('EOF');// End Of File

function data (c) {
  if(c==='<') {
    return tagOpen
  } else if (c === EOF) {
    return ;
  } else {
    return data
  }
}

function tagOpen(c) {
  if (c==='/') {
    return endTagOpen
  } else if(c.match('/^[a-z]$/i')) {
    return tagName(c)
  } else {
    return;
  }
}

function endTagOpen(c) {

}

function tagName(c) {
  if(c.match(/^[\t\n\f ]$/)) {
    return beforeAttributeName
  } else {

  }
}

function beforeAttributeName(c) {

}

function selfClosingStartTag(c) {

}

module.exprts.parseHTML = function parseHTML(html) {
  let state = data
  for (const c of html) {
    state = state(c)
  }
  state = state(EOF)
}