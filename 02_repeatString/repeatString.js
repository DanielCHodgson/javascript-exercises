const repeatString = function(string, num) {

    if (num < 0) return "ERROR"

    let repeatedWord = "";

    for(i=0; i < num; i++) {

         repeatedWord = string + repeatedWord;
    }

    return repeatedWord;
};

// Do not edit below this line
module.exports = repeatString;
