const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(Array.isArray(members) === false) {
    return false;
  }
  
  let result = [];

  for(let i = 0; i < members.length; ++i){
    if(typeof members[i] === "string"){
      let trimmedArr = members[i].trim();
      let char = trimmedArr[0].toUpperCase();
      result.push(char);
    }
  }
  return  result.sort().join('');
};
