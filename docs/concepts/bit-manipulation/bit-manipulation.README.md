Bit manipulation
===
From [Wikipedia, the free encyclopedia](https://en.wikipedia.org/wiki/Bit_manipulation)

>Bit manipulation is the act of [algorithmically](https://en.wikipedia.org/wiki/Algorithm) manipulating 
>[bits](https://en.wikipedia.org/wiki/Bit) or other pieces 
>of [data](https://en.wikipedia.org/wiki/Data_(computing)) shorter than a [word](https://en.wikipedia.org/wiki/Word_(data_type)).
> [Computer programming](https://en.wikipedia.org/wiki/Computer_programming) tasks that require bit 
>manipulation include low-level device control, [error detection](https://en.wikipedia.org/wiki/Error_detection) 
>and [correction](https://en.wikipedia.org/wiki/Error_correction) 
>algorithms, [data compression](https://en.wikipedia.org/wiki/Data_compression), [encryption](https://en.wikipedia.org/wiki/Encryption)
> algorithms, and [optimization](https://en.wikipedia.org/wiki/Optimization_(computer_science)). For most 
>other tasks, modern [programming languages](https://en.wikipedia.org/wiki/Programming_language) 
>allow the [programmer](https://en.wikipedia.org/wiki/Programmer) to work directly 
>with [abstractions](https://en.wikipedia.org/wiki/Abstraction_(computer_science)) instead of bits 
>that represent those abstractions. [Source code](https://en.wikipedia.org/wiki/Source_code) 
>that does bit manipulation makes use of the [operations](https://en.wikipedia.org/wiki/Bitwise_operation): 
>AND, OR, XOR, NOT, and possibly other operations analogous to the boolean operators; there are also 
>[bit shifts]() and operations to count ones and zeros, find high and low one or zero, 
>set, reset and test bits, extract and insert fields, mask and zero fields, gather 
>and scatter bits to and from specified bit positions or fields. Integer arithmetic 
>operators can also effect bit-operations in conjunction with the other operators.
 
>Bit manipulation, in some cases, can obviate or reduce the need to loop over 
>a data structure and can give many-fold speed ups, as bit manipulations are processed in parallel.


Mozilla Developer Network
===
| Operator   | Description            | 
|----------|:-------------|
| [AND (&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND) |   returns a 1 in each bit position for which the corresponding bits of both operands are 1s.  |
| [AND (&=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment) |    uses the binary representation of both operands, does a bitwise AND operation on them and assigns the result to the variable.   | 
| [NOT (~)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT) | inverts the bits of its operand.                                                                                                      
| [OR (l)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) | returns a 1 in each bit position for which the corresponding bits of either or both operands are 1s.|
| [OR (l=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment) |uses the binary representation of both operands, does a bitwise OR operation on them and assigns the result to the variable.|
| [XOR (^)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR) |returns a 1 in each bit position for which the corresponding bits of either but not both operands are 1s.|
| [XOR (^=)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment) |operator only assigns if x is falsy. |

w3cschools.com
===
[JavaScript Bitwise Operations](https://www.w3schools.com/js/js_bitwise.asp) from w3schools.com

| Operator   |      Name      |  Description |
|----------|-------------|:------|
| & |  AND | Sets each bit to 1 if both bits are 1 | 
| l | OR | Sets each bit to 1 if one of two bits is 1
| ^ | XOR | Sets each bit to 1 if only one of two bits is 1
| ~ | NOT | Inverts all the bits
| << | Zero fill left shift | Shifts left by pushing zeros in from the right and let the leftmost bits fall off
| \>> | Signed right shift | Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off
| \>>> | Zero fill right shift | Shifts right by pushing zeros in from the left, and let the rightmost bits fall off

###JavaScript Uses 32 bits Bitwise Operands
>JavaScript stores numbers as 64 bits floating point numbers, but all bitwise operations are performed on 32 bits binary numbers.
>Before a bitwise operation is performed, JavaScript converts numbers to 32 bits signed integers.
>After the bitwise operation is performed, the result is converted back to 64 bits JavaScript numbers.
 
Bookmarks
===
* [Interesting use cases for JavaScript bitwise operators
](https://blog.logrocket.com/interesting-use-cases-for-javascript-bitwise-operators/) by [Glad Chinda](https://blog.logrocket.com/author/gladchinda/)
* [Where would I use a bitwise operator in JavaScript](https://stackoverflow.com/questions/654057/where-would-i-use-a-bitwise-operator-in-javascript) by [James](https://stackoverflow.com/users/21677/james)


Tips
===
Double bitwise NOT to floor number ~~1.235 = 1



Opinion
===
Haven't found anything yet.
