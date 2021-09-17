//an arrow function is an anonymous fn

//es5
var es5Square = function(num) {
    return num * num;
};

console.log(es5Square(3));

//es6
const es6SquareV1 = (num) => {
    return num * num;
};

// arrow fn rules:
// 1. if there is only one param, then you may omit the round brackets
// 2. if there is only one line of code, you may omit the braces
// 3. if you omit the braces, you must omit the return keyword

const es6SquareV2 = num => num * num;

