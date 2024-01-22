/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";
// eslint-disable-next-line no-unused-vars
import Box from "./Box.js";

// eslint-disable-next-line no-unused-vars
const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

// console.log("The everydayPack object:", everydayPack);
// console.log("The pocketNum value:", everydayPack.pocketNum);

// eslint-disable-next-line no-unused-vars
const everyDayBox = new Box("KRETEK FILTERS", 16, false, 10, 15);

console.log("Box Cigarettes Object:", everyDayBox);
