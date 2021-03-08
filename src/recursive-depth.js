const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1;
    for(let elem of arr){
      if(Array.isArray(elem)){
        let current = this.calculateDepth(elem);
        if(current >= result){
          result = current + 1;
        }
      }
    }
    return result;
  }
};