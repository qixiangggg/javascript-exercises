const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	return numbers.reduce((total,num) => {return total + num},0);
};

const multiply = function(numbers) {
  return numbers.reduce((total,num)=>total*num);
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
	let ret = 1;
  for (let i =num;i>0;i--){
    ret *= i;
  }
  return ret;
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
