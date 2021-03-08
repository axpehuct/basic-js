const CustomError = require("../extensions/custom-error");

const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if(String(value)){
      this.array.push(`( ${value} )`);
      return this;
    }
    this.array.push("( )");
    return this;
  },
  removeLink(position) {
    if(this.array[position - 1] === undefined){
      throw Error;
    }else{
      this.array.splice(position -1 , 1);
    }
    return this;
  },
  reverseChain() {
    this.array.reverse();
    return this;
  },
  finishChain() {
    let result = this.array.join("~~");
    this.array = [];
    return result;
  }
};

module.exports = chainMaker;
