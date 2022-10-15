const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const dns = {};

  for (let i = 0; i < domains.length; i++) {
    const arr = domains[i].split('.').reverse();
    let str = '';
    for (let key of arr) {
      str += `.${key}`;
      if(!dns.hasOwnProperty(str)) {
        dns[str] = 1;
      } else {
        dns[str] += 1;
      }
    }
  }

  return dns;
}

module.exports = {
  getDNSStats
};

// getDNSStats(['code.yandex.ru', 'music.yandex.ru', 'yandex.ru']) //=> {'.ru': 3, '.ru.yandex': 3, '.ru.yandex.code': 1,'.ru.yandex.music': 1}