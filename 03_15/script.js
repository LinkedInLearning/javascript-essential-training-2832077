/**
 * Solution: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

// Book param order: title, author, ISBN, pubYear, pageNumber, currentPage, readStatus
const surveillanceCapitalism = new Book(
  "The Age of Surveillance Capitalism",
  "Shoshana Zuboff",
  9781610395694,
  "2019",
  691,
  691,
  "Finished"
);
console.log(surveillanceCapitalism);

const consciousCreative = new Book(
  "The Conscious Creative",
  "Kelly Small",
  9781487008024,
  "2020",
  216,
  216,
  "Finished"
);
console.log(consciousCreative);

const techVirtues = new Book(
  "Technology and the Virtues",
  "Shannon Vallor",
  9780190905286,
  "2016",
  309,
  138,
  "Reading"
)
console.log(techVirtues);

const poohPhil = new Book(
  "Pooh and the Philosophers",
  "John Tyerman Williams",
  9780749320706,
  "1995",
  192,
  108,
  "Reading"
)
console.log(poohPhil);

const zen = new Book(
  "Zen and the Art of Motorcycle Maintenance",
  "Robert M. Pirsig",
  9780060958329,
  "1974",
  449,
  449,
  "Finished"
)
console.log(zen);