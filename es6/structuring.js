//destructuring is the process of extracting elements /props from an obj

var person = {
    myname: "Dave",
    age: 20
};

//es5
var es5Name = person.myname;
var es5Age = person.age;

//es6
var {myname, age} = person;

// console.log(es5Age);
// console.log(es5Name);
// console.log(myname);
// console.log(age);

//identifier following a colon is an alias
var {name: n, age: a, height: h = 1.85} = person
console.log(person);
//////////////////////////////////////////////////////////////////////////////