


// Qn:1

// The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

// title, which is a String representing the title of the movie
// studio, which is a String representing the studio that made the movie
// rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

//b) The constructor for the class Movie will set the class property rating to “PG” as default when no rating is provided.

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of “PG”. You may assume the input array is full of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

//Write a “person” class to hold all the details

//Code:

class Movie {

constructor(title, studio, rating = "PG") 
{

this.title = title;

this.studio = studio;

this.rating = rating;

}

static getPG(movies) {

return movies.filter(movie => movie.rating =="PG");

}

}

let casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log("Title", casinoRoyale.title);

console.log("Studio:", casinoRoyale.studio);

console.log("Rating:", casinoRoyale.rating);

let moviesArray = [

new Movie("Movie1", "Studio1", "PG"),

new Movie("Movie2", "Studio2", "PG-13"),

new Movie("Movie3", "Studio3", "R"),

];

let pgMovies = Movie.getPG(moviesArray);

console.log("PG Rated Movies:");

pgMovies.forEach(movie => {

console.log("Title:", movie.title, "Studio:", movie.studio, "Rating:", movie.rating);

});


class Person {

constructor(name, age, occupation,email,phonenumber) {

this.name = name;

this.age = age;

this.occupation = occupation;

this.email - email;

this.phonenumber=phonenumber;

}

}

const person = new Person("Magizh Seyon", 25, "Doctor","seyon1@gmail.com","1234567");

console.log("Name:", person.name);

console.log("Age:", person.age);

console.log("Occupation:", person.occupation);

console.log("email:", person.email);

console.log("Phonenumber:", person.phonenumber);

// write a class to calculate the uber price.

// Code:

class UberPriceCalculator {

static BASE_FARE = 2.0;

static PER_MILE_RATE = 1.5;

static PER_MINUTE_RATE = 0.5;

constructor(distance, duration) {

this.distance = distance;

this.duration = duration;

}

calculateFare() {

let distanceFare = this.distance * UberPriceCalculator.PER_MILE_RATE;

let timeFare = this.duration * UberPriceCalculator.PER_MINUTE_RATE;

let totalFare = UberPriceCalculator.BASE_FARE + distanceFare + timeFare;

return totalFare;

}

getDistance() {

return this.distance;

}

setDistance(distance) {

this.distance = distance;

}

getDuration() {

return this.duration;

}

setDuration(duration) {

this.duration = duration;

}

toString() {

return `UberPriceCalculator[distance=${this.distance.toFixed(2)} miles, duration=${this.duration} minutes]`;

}

}

let calculator = new UberPriceCalculator(5.5, 15);

console.log(calculator.toString());

let fare = calculator.calculateFare();

console.log(`Total Fare: $${fare.toFixed(2)}`);

// to calculate area and circumference of circle



class Circle {
    constructor(color, radius) {
        this.color = color;
        this.radius = radius;
    }

    // Getter for radius
    getRadius() {
        return this.radius;
    }

    // Setter for radius
    setRadius(newRadius) {
        this.radius = newRadius;
    }

    // Calculate area
    getArea() {
        return Math.PI * this.radius ** 2;
    }

    // Calculate circumference
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const myCircle = new Circle('red', 5); // Create a red circle with radius 5
console.log('Color:', myCircle.color); // Color: red
console.log('Radius:', myCircle.getRadius()); // Radius: 5
console.log('Area:', myCircle.getArea()); // Area: 78.53981633974483
console.log('Circumference:', myCircle.getCircumference()); 