const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type) {
    this.type = type;
  }

  encrypt(text,alphonse) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (text === undefined || alphonse === undefined) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
    alphonse = alphonse.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < text.length; i++) {
      const charText = text[i].charCodeAt(0) - 65;
      const charAlphonse = alphonse[j % alphonse.length].charCodeAt(0) - 65;
      // console.log(charText, charAlphonse);
      if (charText >= 0 && charText <= 25) {
        result += String.fromCharCode((charText + charAlphonse) % 26 + 65);
        // console.log(result);
        j++;
      } else {
        result += text[i];
      }
    }
    // console.log(this.type === false ? result.split('').reverse().join('') : result);
    return this.type === false ? result.split('').reverse().join('') : result;
  }

  decrypt(text,alphonse) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (text === undefined || alphonse === undefined) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
    alphonse = alphonse.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < text.length; i++) {
      const charText = text[i].charCodeAt(0) - 65;
      const charAlphonse = alphonse[j % alphonse.length].charCodeAt(0) - 65;
      if (charText >= 0 && charText <= 25) {
        result += String.fromCharCode((charText - charAlphonse + 26) % 26 + 65);
        // console.log(result);
        j++;
      } else {
        result += text[i];
      }
    }
    // console.log(this.type === false ? result.split('').reverse().join('') : result);
    return this.type === false ? result.split('').reverse().join('') : result;
  }
}

module.exports = {
  VigenereCipheringMachine
};

// const directMachine = new VigenereCipheringMachine();
// directMachine.encrypt('attack at dawn!', 'alphonse') // => 'AEIHQX SX DLLU!'
// directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') // => 'ATTACK AT DAWN!'

// const reverseMachine = new VigenereCipheringMachine(false);
// reverseMachine.encrypt('attack at dawn!', 'alphonse') // => '!ULLD XS XQHIEA'
// reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') // => '!NWAD TA KCATTA'
