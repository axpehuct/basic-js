const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(str === null){
    str = "null";
  }
  str = str.toString();
  let repeatTimes = 1;
  if(options.hasOwnProperty("repeatTimes")){
    repeatTimes = options["repeatTimes"];
  }

  let separator = "+";
  if(options.hasOwnProperty("separator")){
    separator = options["separator"];
  }

  let addition;
  if(options.hasOwnProperty("addition")){
    addition = options["addition"];
  }

  let additionRepeatTimes = 1;
  if(options.hasOwnProperty("additionRepeatTimes")){
    additionRepeatTimes = options["additionRepeatTimes"];
  }

  let additionSeparator = "|";
  if(options.hasOwnProperty("additionSeparator")){
    additionSeparator = options["additionSeparator"];
  }

  // let additionStr = [];
  
  // if(addition !== undefined){
  //   for(let i = 0; i < additionRepeatTimes; ++i){
  //     additionStr.push(addition);
  //   }
  //   additionStr.join(additionSeparator);
  // }
  // let result = [];

  // for(let i = 0; i < repeatTimes; ++i){
  //   result.push(str);
  //   if(additionStr.length !== 0)
  //     result.push(additionStr);
  // }
  let result = [];
  for(let i = 0; i < repeatTimes; ++i){
    result.push(str);
    if(addition !== undefined){
      for(let j = 0; j < additionRepeatTimes; ++j){
        result.push(addition);
        if(j === additionRepeatTimes-1){
          break;
        }
        result.push(additionSeparator);
      }
    }
    if(i === repeatTimes - 1){
      break;
    }
    result.push(separator);
  }
  
  return result.join('');
};
  