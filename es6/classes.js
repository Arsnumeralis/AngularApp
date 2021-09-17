// a class is an template for creating objects
// in js a class is syntactic sugar for prototypes

//es5 constuctor fn

function Movie(title, genre, releaseYr) {
    // by default this is a ref to the global obj
    this.title = title;
    this.genre = genre;
    this.releaseYr = releaseYr;
    // this.rate = function(rating) {
    //     //todo
    // }
}

Movie.prototype.rate = function(rating) {
    // this will reference the current movie obj
    //todo
}
//no matter how many movies there are, there is only 1 fn

// the new keyword result in the creation of an empty obj {} which this will reference in the movie fn
var m1 = new Movie("epic", "comedy", 2021);
//in browser global is windon, in node global is global
console.log(global.title);
m1.rate(5);

//es6

class Actor {
    constructor(name, nationality, active) {
        this.name = name;
        this.nationality = nationality;
        this.active = active;
    }
    addMovie(movie) {
        //TODO
    } // equibalent to prototype fn
}

const a1 = new Actor("Dave", "Australian", true);
a1.addMovie(m1);

