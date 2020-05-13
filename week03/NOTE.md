# 表达式 Expresion

（Left Handside）优先级排列

.Member
  .a.b
  .a[b]
  .foo`string`
  .super.b
  .super['b']
  .new.target
  .new Foo()

.New
  .new Foo

.Call
  .foo()
  .super()
  .foo()['b']
  .foo().b
  .foo()`abc`

Right Handside

.Update
  .a++
  .a--
  .--a
  .++a

.Unary 一元表达式
  .delete a.b
  .void foo()
  .typeof a
  .+a
  .-a
  .~a
  .!a
  .await a

.Exponental
  .**(右结合)

.Multiplicative
  .*
  ./
  .%

.Additive
  .+
  .-

.Shift
  .>>
  .<<
  .>>>

.Relationship
  .< > <= >= instanceof in

.Equality
  .==
  .!=
  .===
  .!==

.Bitwise
  .& ^ |

.Logical
  .&&
  .||

.Conditional
  .? :

## 语句 Statement

.Grammar
  .简单语句
    .ExpressionStatement 表达式语句
    .EmptyStatement 空语句
    .DebuggerStatement 调试通告
    .ThrowStatement 报错
    .ContinueStatement 继续
    .BreakStatement 中断
    .ReturnStatement 返回
  .复合语句
    .BlockStatement(大括号开头 ES6 作用域)
      .[[type]]: normal(Runtime时type是normal)
      .[[value]]:--
      .[[target]]:--
    .IfStatement

    .SwitchStatement
    .IterationStatement(可循环)
      .while( ▒▒ ) ░░░░
      .do ░░░░ while( ▒▒ );
      .for( ▓▓ ; ▒▒ ; ▒▒) ░░░░
      .for( ▓▓ in ▒▒ ) ░░░░
      .for( ▓▓ of ▒▒ ) ░░░░
      .for await()
    .LabelledStatement
    .ContinueStatement
    .BreakStatement
      .[[type]]: break,continue
      .[[value]]:--
      .[[target]]:label

    .TryStatement
      .[[type]]: return
      .[[value]]:--
      .[[target]]:label
    .WithStatement
  .声明
    .FunctionDeclaration
    .GeneratorDeclaration
    .AsyncFunctionDeclaration
    .AsyncGeneratorDeclaration
    .VariableStatement 变量声明
    .ClassDeclaration
    .LexicalDeclaration

预处理（pre-process）

.Runtime
  .Completion Record
    .[[type]]: normal,break,comtinue,return,or throw
    .[[value]]:type(七种类型)
    .[[target]]:label
  .Lexical Envirorment
