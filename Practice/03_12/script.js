/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Bed from "./Bed";

console.log(Bed);

const myBed = new Bed("190x150", 5, 2, false);
console.log(myBed);
myBed.changeSheets();
myBed.makeBed(true);
console.log("my bed after changes: " + JSON.stringify(myBed));
