/**
 * @param {string} label for console time
 * @param {function} callback executed and result compared to assertion
 * @param {array} args arguments passed to callback
 * @param {any} assertion checked against callback results
 * @param {boolean} skip the test
 * @return {any} result
 */
const testWrapper = ({ label, callback, args, assertion, skip }) => {
  if (skip) return;

  console.time(label);

  let result = callback.call(this, ...args);

  if (assertion) {
    console.assert(JSON.stringify(result) === JSON.stringify(assertion));

    if (JSON.stringify(result) === JSON.stringify(assertion)) {
      console.log(`Test passed.`);
    } else {
      console.log(label, "result", JSON.stringify(result));
      console.log(label, `assertion`, JSON.stringify(assertion));
    }
    console.timeEnd(label);
  } else {
    console.timeEnd(label);
    console.log(`Test passed.`);
  }

  return result;
};

exports.testWrapper = testWrapper;

exports.init = () => {
  String.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  String.prototype.pointer = 0;
};
