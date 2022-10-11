const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if(!date) {
    return 'Unable to determine the time of year!';
  }
  if(!(date instanceof Date) || date.toString !== new Date().toString){
    throw new Error('Invalid date!');
  }

  let seasons = '';

  switch(date.toLocaleString('en-GB', { month: 'long' })){
    case 'March': case 'April': case 'May': seasons = 'spring'; break;
    case 'June': case 'July': case 'August': seasons = 'summer'; break;
    case 'September': case 'October': case 'November': seasons = 'autumn (fall)'; break;
    case 'December': case 'January': case 'February': seasons = 'winter'; break;
    default: throw new Error('Unable to determine the time of year!');
  }

  return seasons;
}

module.exports = {
  getSeason
};
