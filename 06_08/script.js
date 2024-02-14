/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let a = 5;
let b = 4;
let c = 3.2;

console.log(`let a: ${a} (${typeof a})`);
console.log(`let b: ${b} (${typeof b})`);
console.log(`let c: ${c} (${typeof c})`);

let result = a + b;

console.log("Result + addition: ", result);

result = a - b;
console.log("Result - substraction: ", result);

result = a * b;
console.log("Result * multiplication: ", result);

result = a / b;
console.log("Result / division: ", result);

result = (a * b) / 2;
console.log("Result * multiplication with () and division by 2: ", result);

result = (a * b) / c;
console.log("Result * multiplication with () and division by c: ", result);

result = a % b;
console.log("Result % modulus: ", result);

a = 15;
result = a % b;
console.log("Result % modulus: ", result);

result = a ** b;
console.log("Result * exponentation: ", result);

console.log("Result adds 1 to a: ", a++);
console.log(a);

a = 4;
b = "4";
result = a + b;
console.log(
  "Adding a number and a string concatenates them but it does not do the addition",
  result
);
// Note when adding numbers in JS we have to be sure (check) they are numbers and not strings
console.log(
  "use type of to be sure they are numbers and not strings ",
  typeof a,
  typeof b
);

a = 44;
b = "4";
result = a - b;
console.log(
  "Substracting a -number and a string does the substraction",
  result
);
