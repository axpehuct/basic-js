const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(typeof sampleActivity !== "string" || !sampleActivity){
    return false;
  }
  if( MODERN_ACTIVITY < sampleActivity || sampleActivity < 0){
    return false;
  }

  sampleActivity = parseFloat(sampleActivity);
  if(!sampleActivity){
    return false;
  }

  let k = Math.log(2) / HALF_LIFE_PERIOD

  return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);

};