Answers (What is the Point)?
===
### [Fibonacci Sequence (Math is Fun)](https://www.mathsisfun.com/numbers/fibonacci-sequence.html) 
```javascript
function fib(n) {
  console.log('n ===', n)
  if (n === 0) {
    return 0
  } else if(n === 1) {
    return 1
  } else {
    return fib(n-1) + fib(n-2)
  }
}


console.log('fib = ', fib(6))
```

### [Pattern Matching](https://backtobackswe.com/platform/content/pattern-matching)

```javascript
// words = ["aa", "bb"]
// pattern = "cc"
// Output: ["aa", "bb"]


/**
 * @param {Array<string>} words
 * @param {string} pattern
 * @return {Array<string>}
 */
const findAndReplacePattern = (words, pattern) => {
  const matches = []
  
  for (let i = 0; i < words.length; i++) {
    if (matcher(words[i], pattern)) matches.push(words[i])
  }
  
  return matches
}

/**
 * @param {string} word
 * @param {string} pattern
 * @return boolean
 */
const matcher = (word, pattern) => {
  const wordToPattern = {}
  const patternToWord = {}
  
  if (word.length !== pattern.length) return false
  
  for (let i = 0; i < word.length; i++) {
    let wordChar = word.charAt(i)
    let patternChar = pattern.charAt(i)
    
    if (!wordToPattern[wordChar] && !patternChar[patternChar]) {
      wordToPattern[wordChar] = patternChar
      patternToWord[patternChar] = wordChar
    } else if(wordChar[patternChar] !== patternToWord[wordToPattern]) {
      return false
    } else if(wordChar[patternChar] !== patternToWord[wordToPattern]) {
      return false
    }
  }
  
  for (let i = 0; i < word.length; i++) {
    let wordChar = word.charAt(i)
    let patternChar = pattern.charAt(i)
    
    if (!wordToPattern[wordChar] && !patternChar[patternChar]) {
      wordToPattern[wordChar] = patternChar
      patternToWord[patternChar] = wordChar
    }
  
    // console.log(wordToPattern[wordChar], patternToWord[patternChar])
    
    if (wordToPattern[wordChar] !== patternChar || patternToWord[patternChar] !== wordChar) {
      return false
    }
  }
  
  return true
}

console.assert(findAndReplacePattern(["aa", "bb", "aba"], "cc").toString() === [ 'aa', 'bb' ].toString())
console.assert(findAndReplacePattern(["aac", "bbc", "bcb", "yzy"], "ghg").toString() === ["bcb", "yzy"].toString())
console.assert(findAndReplacePattern(["aa", "bb"], "zy").toString() === [].toString())
```