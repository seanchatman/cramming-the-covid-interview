/**
 * @param {Array<Array<number>>} board
 * @return {boolean}
 */
const { testWrapper } = require("../utils");

const validSudoku = (board) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!solveSubGrid(board, i, j)) {
        return false;
      }
    }
  }

  for (let i = 0; i < 9; i++) {
    if (!solveColumn(board, i)) {
      return false;
    }
    if (!solveRow(board, i)) {
      return false;
    }
  }

  return true;
};

/***
 * @param {Array} board
 * @param {number} x
 * @param {number} y
 ***/
const solveSubGrid = (board, x, y) => {
  const arr1 = board.slice(y * 3, y * 3 + 3).map((value, index, array) => {
    return value.slice(x * 3, x * 3 + 3);
  });

  let map = {};

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (map[board[i][j]] > 0 && map[board[i][j]]) {
        return false;
      }

      map[board[i][0]] = true;
    }
  }

  return true;
};

const solveColumn = (board, x) => {
  console.log(`solveColumn`);
  const map = {};

  for (let i = 0; i < 9; i++) {
    console.log(`map[board[i][x]]`, board[i][x]);
    if (board[i][x] > 0 && map[board[i][x]]) {
      return false;
    }

    map[board[i][x]] = true;
  }

  console.log(`map`, map);
  return true;
};

const solveRow = (board, y) => {
  console.log(`solveRow`);
  const map = {};

  for (let i = 0; i < 9; i++) {
    if (board[y][i] > 0 && map[board[y][i]]) {
      return false;
    }

    map[board[y][i]] = true;
  }
  return true;
};

module.exports = () => {
  testWrapper({
    label: "validSudoku",
    callback: validSudoku,
    args: [
      [
        [5, 3, 0, 0, 7, 0, 0, 0, 0],
        [6, 0, 0, 1, 9, 5, 0, 0, 0],
        [0, 9, 8, 0, 0, 0, 0, 6, 0],
        [8, 0, 0, 0, 6, 0, 0, 0, 3],
        [4, 0, 0, 8, 0, 3, 0, 0, 1],
        [7, 0, 0, 0, 2, 0, 0, 0, 6],
        [0, 6, 0, 0, 0, 0, 2, 8, 0],
        [0, 0, 0, 4, 1, 9, 0, 0, 5],
        [0, 0, 0, 0, 8, 0, 0, 7, 9],
      ],
    ],
    assertion: true,
  });
};
