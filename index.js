//  Defining object using Object instance
let myCar = new Object();

//  Adding properties to the obj object
myCar.make = "ford";
myCar.model = "Mustang";
myCar.year = 1969;

//console.log(myCar);

// above object obj can also be defined as follow
let myCar2 = {
  make: "Ford",
  model: "Mustang",
  year: 1969,
};

// Object should be enclosed in a pair of curly braces and separated with commas where each property must have a key and value

//Accessing a property
console.log(myCar2.model);

// can also be accessed using bracket notation
console.log(myCar["model"]);

// enumerating the object using for...in
for (var key in myCar2) {
  console.log(key); // returns make,model,year
}

// using Object.keys
let keys = Object.keys(myCar2);
console.log(keys); // returns array of make,model,year

// using Object.getOwnPropertyNames
let keyOwnProperty = Object.getOwnPropertyNames(myCar2);
console.log(keyOwnProperty); // returns array of make,model,year

// creating an Object using the constructor function

function Car(make, model, year) {
  (this.make = make), (this.model = model), (this.year = year);
  console.log(this);
}

// here this points to the object Car ,is it was a regular function thus points to the global object

let car = new Car("ford", "mustang", 1969); // creates a object car and passing the properties

// creating a new object using Object.create

let animal = {
  type: "vertebrates",
  displayType: function () {
    console.log(this.type);
  },
};

let animal1 = Object.create(animal);
animal1.displayType();
animal.type = "mammal";
// console.log(animal);

// defining properties for an object Type

Car.prototype.color = null;
car.color = "red";

// console.log(car.color);
