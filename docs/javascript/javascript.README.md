# [Javascript](https://en.wikipedia.org/wiki/JavaScript)

### [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

- ##[Array](https://developer.mozilla.org/en-US/docs/Glossary/array)
  An ordered collection of data (either primitive or object depending upon the language). Arrays are used to store multiple values in a single variable. This is compared to a variable that can store only one value.

  - [every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)
    tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

    ```javascript
    arr.every(callback(element[, index[, array]])[, thisArg])
    ```

  - [filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    creates a new array with all elements that pass the test implemented by the provided function.

    ```javascript
    let newArray = arr.filter(callback(currentValue[, index[, array]]) {
      // return element for newArray, if true
    }[, thisArg]);
    ```

  - [forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    executes a provided function once for each array element.

    ```javascript
    arr.forEach(callback(currentValue[, index[, array]]) {
      // execute something
    }[, thisArg]);
    ```

  - [indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
    returns the first index at which a given element can be found in the array, or -1 if it is not present.

    ```javascript
    arr.indexOf(searchElement[, fromIndex])
    ```

  - [join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
    creates and returns a new string by concatenating all of the elements in an array (or an [array-like object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

    ```javascript
    arr.join([separator]);
    ```

  - [lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)
    returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

    ```javascript
    arr.lastIndexOf(searchElement[, fromIndex])
    ```

  - [map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    creates a new array populated with the results of calling a provided function on every element in the calling array.
    ```javascript
    let newArray = arr.map(callback(currentValue[, index[, array]]) {
      // return element for newArray, after executing something
    }[, thisArg]);
    ```
  - [pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
    removes the last element from an array and returns that element. This method changes the length of the array.

    ```javascript
    arr.pop();
    ```

  - [push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
    adds one or more elements to the end of an array and returns the new length of the array.

    ```javascript
    arr.push([element1[, ...[, elementN]]])
    ```

  - [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
    executes a reducer function (that you provide) on each element of the array, resulting in single output value.

    ```javascript
    arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
    ```

  - [reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
    reverses an array [in place](https://en.wikipedia.org/wiki/In-place_algorithm). The first array element becomes the last, and the last array element becomes the first.

    ```javascript
    arr.reverse();
    ```

  - [shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
    removes the first element from an array and returns that removed element. This method changes the length of the array.

    ```javascript
    arr.shift();
    ```

  - [slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
    returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

    ```javascript
    arr.slice([start[, end]])
    ```

  - [sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    sorts the elements of an array [in place](https://en.wikipedia.org/wiki/In-place_algorithm) and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

    The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

    ```javascript
    let numbers = [4, 2, 5, 1, 3];
    numbers.sort((a, b) => a - b);
    // numbers = [1, 2, 3, 4, 5]
    ```

  - [splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
    changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

    ```javascript
    let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])

    let months = ["Jan", "Feb", "March", "April", "June"];
    months.splice(4, 1, "May");
    // months = ["Jan", "Feb", "March", "April", "May"]
    ```

  - [unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
    adds one or more elements to the beginning of an array and returns the new length of the array.

    ```javascript
    arr.unshift(element1[, ...[, elementN]])
    ```

- ##[String]()

  - [endsWith](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
    does it end with the characters.

    ```javascript
    str.endsWith(searchString[, length])
    ```

  - [includes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
    is it within another string.

    ```javascript
    str.includes(searchString[, position])
    ```

  - [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
    index of the first value, starting at fromIndex. Returns -1 if not found.

    ```javascript
    str.indexOf(searchValue [, fromIndex])
    ```

  - [lastIndexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
    index of the last value, searching backwards from fromIndex. Returns -1 if not found.

    ```javascript
    str.indexOf(searchValue [, fromIndex])
    ```

  - [replaceAll](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
    returns a new string with all matches of a pattern replaced by a replacement.

    ```javascript
    const newStr = str.replaceAll(regexp|substr, newSubstr|function)
    ```

- Math

- [Element](https://developer.mozilla.org/en-US/docs/Glossary/Element)
  a part of a webpage. In XML and HTML, an element may contain a data item or a chunk of text or an image, or perhaps nothing. A typical element includes an opening tag with some attributes, enclosed text content, and a closing tag.

  - [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
    method of the Element interface returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.

    ```javascript
    element = baseElement.querySelector(selectors);
    ```

```

```
