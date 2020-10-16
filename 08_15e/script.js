/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// map() through the stuff array to make a new stuffItems array.
const stuffItems = stuff.map((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  return listItem;
});

// Append each element from the stuffItems array to the stuffList <ul>
stuffItems.forEach((item) => {
  stuffList.append(item);
});

// Append stuffList to the <article>
article.append(stuffList);
