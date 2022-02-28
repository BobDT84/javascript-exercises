const ftoc = function(temperature) {
  let celsius = 0;
  celsius = (temperature-32)*5/9;
  if(celsius%1 == 0){
    return celsius;
  } else {
    return Number(celsius.toFixed(1)) ;
  }
};

const ctof = function(temperature) {
  let fahren = 0;
  fahren = (temperature*1.8) + 32;
  if(fahren%1 == 0){
    return fahren;
  } else {
    return Number(fahren.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
