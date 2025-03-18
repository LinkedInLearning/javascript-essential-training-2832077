/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import car from "./car.js";

const subaruCar = new car("Crosstrek", 2018, "blue", 4, 4, false);

console.log("The car I currently drive is:", subaruCar.name);
console.log("The doors are currently:", subaruCar.doorsOpen);

subaruCar.toggleDoors(true);

console.log("The doors are currently:", subaruCar.doorsOpen);

const toyotaCar = new car("Corolla", 2020, "red", 4, 4, false);
console.log("The car I currently drive is:", toyotaCar.name);
console.log("What year is the car:", toyotaCar.year);
