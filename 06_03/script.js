/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

// var color = "bluesky";

// document.querySelector(".left").style.backgroundColor = color;
// document.querySelector(".left .color-value").innerHTML = color;

// color = "bluesky";

// document.querySelector(".right").style.backgroundColor = color;
// document.querySelector(".right .color-value").innerHTML = color;

// -----
// function headingColor() {
//   color = "blue";
//   document.querySelector(".title").style.color = color;
// }

// headingColor();

// let a = 10;
// let b = 5;
// let c = 3.7;

// console.log(`let a: ${a} , typeof ${typeof a}`);
// console.log(`let b: ${b} , typeof ${typeof b}`);
// console.log(`let c: ${c} , typeof ${typeof c}`);

// let result = a - c;
// console.log(`result : ${result}`);

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(`factorial result: ${factorial(4)}`);
