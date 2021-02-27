/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
import Movie from "./Movie.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const newMovie = new Movie(
  "Pride and Prejudice and Zombies",
  "2016",
  "Some guy",
  ["producer 1", "producer 2"],
  140
);

console.log(newMovie);
