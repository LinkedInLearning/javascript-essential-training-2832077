// JavaScript code​​​​​​‌​‌​‌​​‌‌​​​‌​‌‌‌‌‌​‌​​​​ below
// Write your answer here, then test your code.

// Change these boolean values to control whether you see
// the expected answer and/or hints
const showExpectedResult = false;
const showHints = false;

const deskArray = [
  "pen",
  "camera",
  "phone",
  "notebook",
  "headphones",
  "laptop",
  "light bulb",
  "USB drive",
  "elephant",
];

const processArray = (deskArray) => {
  let newDeskArr = [...deskArray];

  // Your code goes here
  newDeskArr.pop();
  newDeskArr.sort();
  newDeskArr.unshift(newDeskArr.pop());
  const indexUSB = newDeskArr.indexOf("USB drive");
  newDeskArr.push(newDeskArr.splice(indexUSB, 1)[0]);
  newDeskArr.splice(newDeskArr.indexOf("laptop"), 1);
  // Your code ends here

  return newDeskArr;
};

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
const result = processArray(deskArray);
console.log(result);

/**
 * Console output

✓ Test passed: Output matches test case.

Tests passed: 1 of 1
> All tests passed

Great work! You got the right answer.
Your code returned:
[
  'phone',
  'camera',
  'headphones',
  'light bulb',
  'notebook',
  'pen',
  'USB drive'
]


 */
