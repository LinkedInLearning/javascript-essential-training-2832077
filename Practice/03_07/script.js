/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car = {
  name: "Subaru Crosstrek",
  color: "blue",
  passengers: 5,
  awd: true,
};

console.log(car);
console.log("The kind of vehicle:", car.name);
console.log("How many passengers can it hold:", car.passengers);

let color = "color";
console.log("What is the color:", car[color]);
