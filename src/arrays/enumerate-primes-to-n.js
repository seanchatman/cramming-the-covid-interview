const { testWrapper } = require("../utils");

/**
 * @param {number} n
 * @return {Array<number>}
 */
const enumeratePrimes = (n) => {
  let output = [];

  for (let i = 0; i < n; i++) {
    let prime = isPrime(i);

    if (prime) output.push(i);
  }

  return output;
};

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false;
  return num > 1;
};

module.exports = () => {
  testWrapper({
    label: "enumeratePrimes",
    callback: enumeratePrimes,
    args: [23],
    assertion: [2, 3, 5, 7, 11, 13, 17, 19],
  });
};
