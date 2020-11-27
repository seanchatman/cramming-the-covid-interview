/**
 * @param {Array<string>} sentence
 * @return {number}
 *
 **/
const distanceOfClosestRepeatedEntries = (sentence) => {
  const wordMap = new Map();

  let smallestDistance = Infinity;
  let smallestWord = "";

  for (let i = 0; i < sentence.length; i++) {
    let word = sentence[i];
    if (!wordMap.has(word)) {
      wordMap.set(word, i);
    } else {
      let firstIndex = wordMap.get(word);
      let distance = Math.abs(firstIndex - i);

      if (distance < smallestDistance) {
        smallestDistance = distance;
        smallestWord = word;
      }
    }
  }

  if (smallestDistance !== Infinity) {
    return smallestDistance;
  } else {
    return -1;
  }
};

module.exports = distanceOfClosestRepeatedEntries;
