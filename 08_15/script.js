/**
 * The map() array method.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

const stuff = ["piggy", "headlamp", "pen", "pencil", "eraser", "water bottle"];

const article = document.querySelector("article");
let stuffList = document.createElement("ul");

// forEach() array method
stuff.forEach((item) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = item;
  stuffList.append(listItem);
});

article.append(stuffList)