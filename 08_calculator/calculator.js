const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let sum = 0;
  for(const number of numbers){
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
  let multiply = 1;
  numbers.forEach(num=>multiply *= num);
  return multiply;
};

const power = function(num1, num2) {
	return Math.pow(num1,num2);
};

const factorial = function(num) {
	if (num == 0){
    return 1;
  }
  else{
    let ret = num;
    num--;
    for(; num>=1; num--){
      ret*=num;
    }
    return ret;
  }
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
