const sumAll = function (num1, num2) {

    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 < 0 || num2 < 0) return "ERROR";

    let nums = [num1, num2];

    if (num1 > num2) nums.reverse();

    let sum = 0;

    for (i = nums[0]; i <= nums[1]; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
