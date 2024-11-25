const palindromes = function (string) {

    console.log("input string: " + string)

    let modifiedString = string.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
    modifiedString = modifiedString.replace(/\s/g, '');
    modifiedString = modifiedString.toLowerCase();

    let reversedModifiedString = modifiedString.split("").reverse().join("");

    return modifiedString === reversedModifiedString;
};

// Do not edit below this line
module.exports = palindromes;
