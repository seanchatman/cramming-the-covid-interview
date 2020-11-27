/**
 * @param {Array<Array<number>>} points
 * @return {number}
 */
const maximumCollinearPoints = (points) => {
  console.log(`points`, points);

  const lineMap = new Map();

  points.forEach((value) => {
    if (!lineMap.has("l" + value[0])) {
      lineMap.set("l" + value[0], [value]);
    } else {
      lineMap.get("l" + value[0]).push(value);
    }

    if (!lineMap.has("r" + value[1])) {
      lineMap.set("r" + value[1], [value]);
    } else {
      lineMap.get("r" + value[1]).push(value);
    }
  });

  let lineCount = 0;

  lineMap.forEach((value) => {
    if (value.length > lineCount) lineCount = value.length;
  });

  console.log(`lineMap`, lineMap);

  return lineCount;
};

module.exports = maximumCollinearPoints;
