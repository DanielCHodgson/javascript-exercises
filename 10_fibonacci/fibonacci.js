const fibonacci = function (fibNum) {

    if (fibNum == 0) return 0;
    if (fibNum < 0) return "OOPS";

    let a = 1;
    let b = 1;
    for (i = 3; i <= fibNum; i++) {
        let fibonacci = a + b;
        a = b;
        b = fibonacci;
    }
    return b;
};

// Do not edit below this line
module.exports = fibonacci;
