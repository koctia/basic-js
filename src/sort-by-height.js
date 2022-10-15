const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arrSort = arr.slice(0), i = 0;
  arrSort = arrSort.sort((a,b) => a - b).filter(item => item > 0);

  return arr.map((item,index) => {
    if(item === -1) {
      return item;
    } else {
      return arrSort[i++];
    }
  });
}

module.exports = {
  sortByHeight
};


// sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) // => [-1, 150, 160, 170, -1, -1, 180, 190]