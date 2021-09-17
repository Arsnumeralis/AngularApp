// everything in js is an object and all variables are refs.
// what matters is whether the obj is mutable or immutable (value)

var x = 1;
var y = x; // x --> 1 <-- y

y += 1; // is x affected? no as numbers are immutable

console.log(x);
console.log(y);

var greeting = "Hello World";
var newGreeting = greeting.replace("World", "JS");

console.log(greeting); //hello world strings are immmutible
console.log(greeting.replace("World", "JS"));
console.log(newGreeting);

var person = {
    name: "Dave",
    age: 20
};

var personCopy = person; // copying a reference that is referencing the same obj
personCopy.name = "David"; // is person affected? yes, obj literals are mutable

console.log(person)

function increment(num) {
    num += 1;
}
increment(x); //what is x after fn is done executing? 

console.log(x);

function incrementAge(person) {
    person.age +=1;
}

incrementAge(person);// changed because object is mutable

console.log(person);

function f() {
    var a  = 1; //this declares the variable to be bound to the function scope only.
}

