const removeFromArray = function (array, ...theArgs) {

    array = array.filter(el => !theArgs.includes(el))
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
