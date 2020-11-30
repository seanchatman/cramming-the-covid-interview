/**
 * @param {Array<number>} buildings
 * @return {Array<number>}
 */
const getBuildingsWithAView = (buildings) => {
  let output = [0];
  let maxHeight = buildings[0];

  for (let i = 1; i < buildings.length; i++) {
    if (maxHeight < buildings[i]) {
      output.push(i);
    }
    if (buildings[i] > maxHeight) {
      maxHeight = buildings[i];
    }
  }

  return output;
};

module.exports = getBuildingsWithAView;

// testWrapper({
//   label: "getBuildingsWithAView",
//   callback: getBuildingsWithAView,
//   args: [[0, 1, 0, 1, 0]],
//   assertion: [0, 1],
// });
