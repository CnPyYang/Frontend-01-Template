function createElement(Cls, attributes, ...children) {
  let o = new Cls({
    timer: {}
  })

  // if(typeof Cls === 'string') {
  //   o = new Wrapper(Cls)
  // } else {
  //   o = new Cls({
  //     timer: {}
  //   })
  // }

  for (let name in attributes) {
    o.setAttribute(name, attributes[name])
  }

  for (const child of children) {
    o.appendChild(child)
    // if (typeof child === 'string'){
    //   child = new Text(child)
    // }
    // o.children.push(child)
  }

  return o
}

class Parent {
  constructor(config) {
    this.children = []
    this.root = document.createElement('div')
  }
  setAttribute(name, val) {// attribute
    this.root.setAttribute(name, val)
  }
  appendChild(child) { // children
    this.children.push(child)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

class Child {
  constructor(config) {
    this.children = []
    this.root = document.createElement('div')
  }
  setAttribute(name, val) {// attribute
    this.root.setAttribute(name, val)
  }
  appendChild(child) { // children
    child.mountTo(this.root)
  }
  mountTo(parent) {
    parent.appendChild(this.root)
  }
}

let component = <Parent id="a" class="b">
  <Child></Child>
  <Child></Child>
  <Child></Child>
</Parent>
console.log(component, document.body)
component.mountTo(document.body)
/*
  let component = createElement(
    Parent,
    {
      id: "a",
      "class": "b"
    },
    createElement(Child, null),
    createElement(Child, null),
    createElement(Child, null)
  )
*/

/*let component = <div id="a" cls="b" style="width:100px;height:100px;background-color:lightgreen">
  <div></div>
  <p></p>
  <div></div>
  <div></div>
</div>*/
