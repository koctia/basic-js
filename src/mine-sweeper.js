const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const result = [];

  for(let i = 0; i < matrix.length; i++){
    result[i] = [];
    for(let j = 0; j < matrix[i].length; j++){
      let count = 0;
      // count += matrix[i][j] ? 1: 0;
      if(matrix[i][j-1] !== undefined) count += matrix[i][j-1] ? 1: 0; // left
      if(matrix[i][j+1] !== undefined) count += matrix[i][j+1] ? 1: 0; // right
      if(matrix[i-1] !== undefined) count += matrix[i-1][j] ? 1: 0; // top
      if(matrix[i+1] !== undefined) count += matrix[i+1][j] ? 1: 0; // bottom

      if(matrix[i-1] !== undefined && matrix[i][j-1] !== undefined) count += matrix[i-1][j-1] ? 1: 0; // top left
      if(matrix[i-1] !== undefined && matrix[i][j+1] !== undefined) count += matrix[i-1][j+1] ? 1: 0; // top right
      if(matrix[i+1] !== undefined && matrix[i][j-1] !== undefined) count += matrix[i+1][j-1] ? 1: 0; // bottom left
      if(matrix[i+1] !== undefined && matrix[i][j+1] !== undefined) count += matrix[i+1][j+1] ? 1: 0; // bottom right

      // result[i].push(`${count}-${matrix[i][j]}`);
      result[i].push(count);
    }
  }

  return result;
}

module.exports = {
  minesweeper
};

// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
//  ];
 
// minesweeper(matrix)
//  [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
//  ];
