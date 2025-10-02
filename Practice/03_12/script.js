/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import { Backpack, Kast } from "./Backpack.js";

const everydayKast = new Kast(
  "120cm",
  "80cm",
  "Black",
  12,
  6,
  "Nachtkast",
  false
);

everydayKast.toggelKast(true);
console.log("De Everydaykast:", everydayKast);

everydayKast.newKledingAantal(15, 8);
console.log("De Everydaykast:", everydayKast);
