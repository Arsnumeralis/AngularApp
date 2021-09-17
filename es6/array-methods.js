// functional programming:
// >favours functions over objects
// >favours transformations over modification
// >favours immutable over mutalbe data

// to transform is to create something new from something existing

const nums = [1,2,3];
// push is an oo method as it mutates the object on which it is called
nums.push(4);

// concat is a functional method, it creates a new object
const newNums = nums.concat(5);
console.log(nums);
console.log(newNums);

// my own custom transformational array filter
function myFilter(array, predicate) { // predicate is a function that accepts a value and returns a boolean
    const filteredArray = [];
    for (let element of array) {
        if (predicate(element)) {
            filteredArray.push(element);
        }
    }
    return filteredArray;
}

function isEven(num) {
    return num % 2 === 0;
}

//const evenNums = myFilter(nums, isEven);
const evenNums = myFilter(nums, n => n%2===0);

// this behavious is built into every js array

const oddNums = nums.filter(n => n % 2 !== 0);

// each array has a map method that is similar to filter, but that trasforms each element

const sqNums = nums.map(n => n ** 2);

console.log(sqNums);

// chal make a deep copy of the delegates array

const delegates = [
    {name: "James", company: "Bud", course: "Angular"},
    {name: "Stephen", company: "Bud", course: "Angular"},
    {name: "Caleb", company: "Bud", course: "Angular"}
]

const delegatesCopy = delegates.map(n => ({...n}));

// hacky ways of making deep copies
// serialise and deserialise

const delegatesCopy2 = JSON.parse(JSON.stringify(delegates));
// relatively slow and does not handle function properties at all, nor null pointers


