const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if(s1 === '' || s2 === '') {
    return 0;
  }
  const letterVerification = new Set(s1);

  let count = 0;

  for (let item of letterVerification) {
    let countS1 = 0, countS2 = 0;
    for (let i = 0; i < s1.length; i++) {
      if(item === s1[i]) {
        countS1++;
      }
    }
    for (let i = 0; i < s2.length; i++) {
      if(item === s2[i]) {
        countS2++;
      }
    }
    count += Math.min(countS1, countS2);
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
