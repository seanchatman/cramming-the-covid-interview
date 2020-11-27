const fibonacciGenerator = (num) => {
  console.log(`src/missing-fibonacci-number.js: num`, num);
  const fibMap = new Map();
  const fibArray = [1];

  const fib = (n) => {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      let cached = fibMap.get(n);

      if (cached) {
        return cached;
      } else {
        let result = fib(n - 1) + fib(n - 2);
        fibMap.set(n, result);
        fibArray.push(result);
        return result;
      }
    }
  };

  fib(num);

  return {
    fibMap,
    fibArray,
  };
};

/**
 * @param {Array<number>} arr
 * @return {number}
 */
const missingFibonacciNumber = (arr) => {
  // let num = 403;

  // timeWrapper("cachedFib", fib, arr.length);

  // console.log(fibArr);

  // console.assert(
  //   timeWrapper("cachedFib", fib, correctLength) === timedFib(correctLength)
  // );

  // console.log('timesZeroRan:', timesZeroRan)
  // console.log('timesOneRan:', timesOneRan)
  // console.log('timesFibRan:', timesFibRan)

  const { fibArray } = fibonacciGenerator(arr.length + 1);

  console.log(
    `src/missing-fibonacci-number.js: fibArray`,
    fibArray.toString(),
    arr.toString()
  );

  for (let i = 0; i < fibArray.length; i++) {
    if (fibArray[i] !== arr[i]) {
      console.log(`src/workbench.js: fib=${fibArray[i]}  i=${i} is missing`);
      return i + 1;
    }
  }

  console.log(`src/workbench.js: arr.length`, arr.length);

  return arr.length;
};

// timeWrapper("missingFib", missingFibonacciNumber, 1, 1, 2, 3, 5, 8, 13, 21, 34);

module.exports = missingFibonacciNumber;
