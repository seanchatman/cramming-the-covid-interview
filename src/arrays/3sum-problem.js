/**
 * @param {Array<number>} A
 * @return {Array<Array<number>>}
 */
const threeSum = (A) => {
  let output = [];

  A = A.sort((a, b) => a - b);

  let i = 0;

  const map = {};

  while (i < A.length - 2) {
    let j = i + 1;
    while (j < A.length - 1) {
      let k = j + 1;
      while (k < A.length) {
        let a = A[i];
        let b = A[j];
        let c = A[k];

        if (a + b + c === 0) {
          map[[a, b, c]] = [a, b, c];
        }
        k++;
      }
      j++;
    }
    i++;
  }

  for (const key in map) {
    output.push(map[key]);
  }

  return output;
};

module.exports = threeSum;
