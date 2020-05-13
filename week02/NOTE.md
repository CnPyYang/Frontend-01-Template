<Number> = "0"| "1"|....|"9"

<DecimalNumber> = "0"|{"1"|....|"9" <Number>*}

<AdditiveExpression>= <DecimalNumber> | <AdditiveExpression> "+" <DecimalNumber>

<MultiplicationExpression>= <DecimalNumber> | <MultiplicationExpression> "*" <DecimalNumber>

<LogicalExpression>= <AdditiveExpression> | <LogicalExpression> "||" <AdditiveExpression> |
<LogicalExpression> "&&" <AdditiveExpression>


编程语言

  .Atom
    .Identifier
    .Literal
  .Expression
    .Atom
    .Operator
    .Punctuator
  .Statement
    .Expression
    .Keywotd
    .Punctuator
  .Structure
    .Function
    .Class
    .Process
    .Namespase
    . ...
  .Program
    .Program
    .Module
    .Package
    .Library

ASCII 0-127
Unicode
UCS U+0000 - U+FFFF
GB
ISO - 8859

UTF8/UTF16/UTF32


InputElement
  WhiteSpace 空格 <TAB> <VT> <FF>(FORM FEED)<SP> <NBSP> <ZWNBSP> <USP>
  LineTerminator 换行符 <LF>换行 <CR>回车 <LS> <PS>
  Comment 注释 //单行注释  /*多行注释*/
  Token 标记
    Punctuator
    Keywords
    Literal
    Identifier 标识符
      变量名
      属性名

String
  character
  code point
  encodeing
Number
Boolean
Null
Undefined
