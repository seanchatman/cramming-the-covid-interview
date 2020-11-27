/**
 * @param {string} searchString
 * @param {string} target
 * @return {string}
 */
const minWindow = (searchString, target) => {
  String.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };
  let targetMap = new Map();
  let foundMap = new Map();
  let output = "";
  let recordPointer = 0;

  target.forEach((char) => {
    targetMap.set(char, char);
  });

  console.log(`targetMap`, targetMap);

  searchString.forEach((charI, i) => {
    let tempOutput = "";
    foundMap.clear();
    recordPointer = 0;

    for (let j = i; j < searchString.length; j++) {
      let charJ = searchString[j];

      if (targetMap.has(charJ)) {
        // console.log(`targetMap.has(charJ)`, charJ);
        // console.log(`substring: `, searchString.substring(i, j));
        if (foundMap.size === 0) {
          console.log(`j`, j);
        } else if (foundMap.size === target.length) {
          console.log(`tempOutput`, tempOutput, output);

          if (output === "" || tempOutput.length < output.length) {
            output = tempOutput;
          }

          foundMap.clear();
          break;
        }

        foundMap.set(charJ, charJ);
      } else {
        if (foundMap.size === target.length) {
          // console.log(`foundMap`, foundMap);
          // console.log(`substring: `, searchString.substring(recordPointer, j));
          console.log(`tempOutput`, tempOutput, output);

          if (output === "" || tempOutput.length < output.length) {
            output = tempOutput;
          }

          foundMap.clear();
          break;
        }
      }

      if (foundMap.size > 0) {
        tempOutput += charJ;
      }
    }
  });

  return output;
};

module.exports = minWindow;
