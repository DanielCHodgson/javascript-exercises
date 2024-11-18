const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;

};

const sum = function (nums) {

  var numbers = nums.map(Number);
  let sum = 0;
  numbers.forEach(num => sum += num);
  return sum;
};

const multiply = function (nums) {

  let total = nums[0];

  for (i = 1; i < nums.length; i++) {
    total = nums[i] * total;
  }

  return total;

};

const power = function (num, power) {

  let total = num;

  for (i = 1; i < power; i++) {
    total = num * total;
  }

  return total;
};

const factorial = function (num) {
 
  let factoral = 1;
  
  if (num === 0) return factoral;

  for (i = 1; i <= num; i++) {
    factoral = factoral * i;
  }

  return factoral;

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
