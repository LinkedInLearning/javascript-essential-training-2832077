/**
 * Solution: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "lightbulb",
  "usb drive",
];
console.log("Original array:", deskArray);

// Remove the last item:
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
// deskArray.pop();
// console.log("New array:", deskArray);

// Add last item as the first item on the array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
// deskArray.unshift(deskArray.pop());
// console.log("Last item is now first:", deskArray);

// Sort items by alphabetical order:
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// deskArray.sort();
// console.log("Sorted array:", deskArray);

// Find "notebook":
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// const foundItem = deskArray.find((item) => item === "notebook");
// console.log("Found item:", foundItem);

// Find and remove an item:
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
// let remove = "notebook";
// deskArray.splice(deskArray.indexOf(remove), 1);
// console.log(`Array with "${remove}" removed:`, deskArray);
