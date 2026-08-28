/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

// - Build an array with 8 items
let items = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "honeydew",
];

console.log("Original Array:", items);

// - Remove the last item
let lastItem = items.pop();
console.log("After removing the last item:", items);

// - Add the last item as the first item on the array
items.unshift(lastItem);
console.log("After adding the last item as the first item:", items);

// - Sort the items by alphabetical order
items.sort();
console.log("After sorting alphabetically:", items);

// - Use the find() method to find a specific item in the array
let itemToFind = "date";
let foundItem = items.find((item) => item === itemToFind);
console.log(`Found item: ${foundItem}`);

// - Remove the item you found using the find method from the array
let index = items.indexOf(foundItem);
if (index !== -1) {
  items.splice(index, 1);
}
console.log("After removing the found item:", items);
