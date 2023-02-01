// Constructor
const additon = new Function("x", "y", "return x + y");

// Declaration
function addition(x, y) {
    return x + y;
}

// Expression
const addition = function (x, y) {
    return x + y;
};
// Expression
const addition = function funcName(x, y) {
    return x + y;
};

// Arrow function
const addition = (x, y) => x + y;

// Method
const obj = {
    addition(x, y) {
        return x + y;
    },
};
