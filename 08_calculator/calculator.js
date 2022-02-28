const add = function(a,b) {
  return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	let sum = 0;
  for(let i = 0; i<array.length; i++){
    sum = sum + array[i];
  }
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for(let i = 0; i<array.length; i++){
    product = product * array[i];
  }
  return product;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(n) {
  if (n== 0){
    return 1;
  }
  let product = 1;
  while(n>0){
    product = product * n;
    n--;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
