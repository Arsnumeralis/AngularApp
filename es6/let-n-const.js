// var is not block scoped

if (true) {
    var x = 1
};

console.log(x); // x is outside the scope of the if statement

// let and const are block scoped

// if (true)  {
//     let y = 1,
//     const z = 2
// };

// console.log(y);

// console.log(z);

// const will not permit redeclaration

// const variables cannot be reassigned, but const doesn't mean that the variable is immutable

const nums = [1,2,3];

// nums = [];
nums.push(4); // array is mutable

console.log(nums);