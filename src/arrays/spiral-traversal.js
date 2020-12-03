const { testWrapper } = require("../utils");

/**
 * @param {Array<Array<number>>} matrix
 * @return {Array<number>}
 */
const spiralOrder = (matrix) => {
  let output = [matrix[0][0]];

  let row = 0;
  let col = 0;

  let startRow = 0;
  let endRow = matrix.length - 1;
  let startCol = 0;
  let endCol = matrix[0].length - 1;

  let total = matrix.length * matrix[0].length;

  let i = 0;
  let move = "e";

  while (i < total - 1) {
    if (move === "e") {
      console.log(`east`, matrix[row][col]);
      if (col < endCol) {
        col++;
      } else {
        row = ++startRow;
        move = "s";
      }
    } else if (move === "s") {
      console.log(`south`, matrix[row][col]);

      if (row < endRow) {
        row++;
      } else {
        col--;
        startCol++;
        move = "w";
      }
    } else if (move === "w") {
      console.log(`west`, matrix[row][col]);
      if (col >= startCol) {
        col--;
      } else {
        endRow--;
        row--;
        move = "n";
      }
    } else if (move === "n") {
      console.log(`north`, matrix[row][col]);

      if (row !== startRow) {
        row--;
      } else {
        console.log(`startCol`, "col", startCol, col, endCol);

        if (startCol === 1 && col === 0) {
          move = "w";
        } else {
          move = "e";
        }
        startCol++;
        col++;
      }
    }
    output.push(matrix[row][col]);
    i++;
  }

  return output;
};

module.exports = () => {
  /*
  testWrapper({
    label: "spiralOrder",
    callback: spiralOrder,
    args: [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
    ],
    assertion: [1, 2, 3, 6, 9, 8, 7, 4, 5],
  });

  testWrapper({
    label: "spiralOrder",
    callback: spiralOrder,
    args: [
      [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ],
    ],
    assertion: [1, 2, 4, 6, 8, 7, 5, 3],
  });*/

  testWrapper({
    label: "spiralOrder",
    callback: spiralOrder,
    args: [
      [
        [1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10, 9, 8, 7],
      ],
    ],
    assertion: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
  });
};
