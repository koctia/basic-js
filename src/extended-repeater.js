const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 * STRING (3) + addition additionRepeatTimes(3) additionSeparator separator
 */
function repeater(str, options) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let rep = '';
  if(!options.separator) {
    options.separator = '+';
  }
  if(!options.additionSeparator) {
    options.additionSeparator = '|';
  }

  for(let i = 0; i < options.repeatTimes; i++) {
    let addition = '';
    for(let j = 0; j < options.additionRepeatTimes; j++){
      addition += `${options.addition}`;
      if(j < options.additionRepeatTimes-1) {
        addition += options.additionSeparator;
      }
    }
    if(!options.additionRepeatTimes && options.addition) {
      addition += `${options.addition}`;
    }
    rep +=  `${str}${addition}`;
    if(i < options.repeatTimes-1) {
      rep += options.separator;
    }
  }

  if(!options.repeatTimes) {
    rep = `${str}${options.addition}`;
  }

  // console.log(rep);
  return rep;
}

module.exports = {
  repeater
};


// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };
// repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion })
//, 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
// repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 })
//, 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION'
// repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' })
// 'TESTstrADD!'
// repeater(new Set(), { repeatTimes: 3, separator: '??? ', addition: [1, 2, 3, '4'], additionRepeatTimes: 2, additionSeparator: '!!!' })
//, '[object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4??? [object Set]1,2,3,4!!!1,2,3,4');
// repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }) 
//, 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'
// repeater('la', { repeatTimes: 3, separator: 's' }) //, 'laslasla'
// repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' });
// repeater('la', { repeatTimes: 3 }) //, 'la+la+la'