const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = { // '( value1 )~~( value2 )~~( value3 )'
  chain: [],
  getLength() { // возвращает текущую длину цепочки в виде числа
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) { // добавляет ссылку, содержащую строковое представление значения, в цепочку
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.push(value);
    return this;
  },
  removeLink(position) { // удаляет звено цепи в указанном положении
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if(!(position > 0) || position > this.chain.length) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() { // переворачивает цепочку
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() { // завершает цепочку и возвращает ее
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arrStr = this.chain.map(item => `( ${item} )`).join('~~');
    this.chain = [];
    return arrStr;
  }
};

module.exports = {
  chainMaker
};

