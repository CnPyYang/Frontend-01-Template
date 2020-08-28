# Object

标识(identifier)，状态(state)，行为(behavior)
状态来描述对象，状态的改变即是行为。

类分为归类（多继承）和分类（单继承）

原型是更接近人类原始认知的描述对象的方法。

设计对象的状态和行为时，遵循“行为改变状态”的原则。

在JavaScript运行时，原生对象的描述方式非常简单，我们只需要关心原型和属性两个部分。

Key(String / Symbol):Value(Data数据属性 / Accessor访问器属性)

Data Property数据属性
  .[[value]]
  .writable
  .enumerable
  .configurable

Accessor Property访问器属性
  .get
  .set
  .enumerable
  .configurable

Object API
  .{} / [] / Object.defineProperty
  .Object.create / Object.setPrototypeOf / Object.getPrototypeOf
  .new / class / extends
  .new / function / prototype (最好别用)

Function Object（除了一般对象的属性和原型，函数对象还有一个行为[[call]]。）

Special Object（自己补充）

Host Object（作业）
