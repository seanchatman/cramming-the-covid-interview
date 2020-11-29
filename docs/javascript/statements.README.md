# <a href="https://en.wikipedia.org/wiki/Statement_(computer_science)">Statements</a>

In [computer programming](https://en.wikipedia.org/wiki/Computer_programming),
a statement is a <a href="https://en.wikipedia.org/wiki/Syntax_(programming_languages)">syntactic</a>
unit of an [imperative programming language](https://en.wikipedia.org/wiki/Imperative_programming) that expresses some action to be carried out.[1] A
[program](https://en.wikipedia.org/wiki/Computer_program) is written by a sequence of one or more statements.
A statement may have internal components (e.g., <a href="https://en.wikipedia.org/wiki/Expression_(computer_science)">expressions</a>).

### [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)

- ## Control Flow

  - [Block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)
    - A block statement is used to group zero or more statements. The block is delimited by a pair of curly brackets.
  - [break](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break)
    - Terminates the current loop, switch, or label statement and transfers program control to the statement following the terminated statement.
  - [Empty](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/Empty)
    - An empty statement is used to provide no statement, although the JavaScript syntax would expect one.
  - [if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
    - Executes a statement if a specified condition is true. If the condition is false, another statement can be executed.
  - [switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
    - Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
  - [throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
    - Throws a user-defined exception.
  - [try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
    - Marks a block of statements to try, and specifies a response, should an exception be thrown.

- ## Declarations

  - [var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var)
    - Declares a variable, optionally initializing it to a value.
  - [let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
    - Declares a block scope local variable, optionally initializing it to a value.
  - [const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    - Declares a read-only named constant.

- ## Functions and classes

  - [function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)
    - Declares a function with the specified parameters.
  - [function\*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
    - Generator Functions enable writing iterators more easily.
  - [async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
    - Declares an async function with the specified parameters.
  - [return](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)
    - Specifies the value to be returned by a function.
  - [class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class)
    - Declares a class.

- ## Iterations

  - [do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
    - Creates a loop that executes a specified statement until the test condition evaluates to false. The condition is evaluated after executing the statement, resulting in the specified statement executing at least once.
  - [for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
    - Creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement executed in the loop.
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in">for...in</a>
    - Iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of">for...of</a>
    - Iterates over iterable objects (including arrays, array-like objects, iterators and generators), invoking a custom iteration hook with statements to be executed for the value of each distinct property.
  - <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of">for await...of</a>
    - Iterates over async iterable objects, array-like objects, iterators and generators, invoking a custom iteration hook with statements to be executed for the value of each distinct property.
  - [while]()
    - Creates a loop that executes a specified statement as long as the test condition evaluates to true. The condition is evaluated before executing the statement.

- ## Others
  - [debugger]()
    - Invokes any available debugging functionality. If no debugging functionality is available, this statement has no effect.
  - [export]()
    - Used to export functions to make them available for imports in external modules, and other scripts.
  - [import]()
    - Used to import functions exported from an external module, another script.
  - [label]()
    - Provides a statement with an identifier that you can refer to using a break or continue statement.
  - [with]()
    - Extends the scope chain for a statement.
