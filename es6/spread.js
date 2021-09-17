//spread is primarily used to make copies, especially shallow copies (copying refs not data)

const nums = [1,2,3];

const numsCopy = [...nums];
numsCopy.push(4); // is the obj refd by nums affected. No numsCopy is a distinct array obj

console.log(nums);
console.log(numsCopy);

numsCopy[2] = 4; //doens't get affected either. numbers are immutable, references are independent

console.log(nums);
console.log(numsCopy);

//nb: you can safely make copies of arrays/object with immutable elements/props

const person = {
    name: "Dave",
    hobbies: ["reading", "eating out"]
};

// const personCopy = {...person};

// personCopy.name = "David"; //is the object referenced by person affected? no string is immutable
// personCopy.hobbies[1] = "biking" //now yes, arrays are mutable
// console.log(person);

//immutable js

//can you create a deep copy of a person object using spread only?

//spread can also be used to extend an object or array
const extendedNums = [...nums,4,5,6];
const extendedPerson = {...person, age=20, name: "Davo"};

const personDeepCopy = {...person, hobbies: [...person.hobbies]}; //overwrite with shallow copy of the array with immutable objects.
//map array method is a good way to deep copy

