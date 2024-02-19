// JavaScript code​​​​​​‌​‌​‌​​‌‌​​​​‌‌​‌​‌‌​​​​​ below
// Write your answer here, then test your code.

// Change these boolean values to control whether you see
// the expected answer and/or hints
const showExpectedResult = true;
const showHints = false;

const taxGST = 5;
const taxPST = 8;

const calculateTotal = (prices) => {
  const totals = {};
  // Add together all values from the prices array
  totals.beforeTax = prices.reduce((a, b) => a + b, 0);

  // Your code starts here
  totals.GST = totals.beforeTax * (taxGST / 100);
  totals.PST = totals.beforeTax * (taxPST / 100);
  totals.sum = totals.beforeTax + totals.GST + totals.PST;
  // Your code ends here

  return totals;
};

const showTotals = (prices) => {
  const totals = calculateTotal(prices);
  return `
        Before tax: $${totals.beforeTax.toFixed(2)}
        GST: $${totals.GST.toFixed(2)}
        PST: $${totals.PST.toFixed(2)}
        -----------------
        Sum total: $${totals.sum.toFixed(2)}
    `;
};

// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
// Nested array of random prices
const pricesArr = [
  [2.5, 9.99, 3.99, 18.59, 49.96],
  [2.99, 3.99, 4.99, 5.99, 6.99],
  [100.99, 200.99, 300.99, 400.99, 500.99],
  [1.99, -2.99, 3.99, -4.99, 5.99],
];

// Pick random array of prices
const randomPrices = Math.floor(Math.random() * pricesArr.length);

const result = showTotals(pricesArr[randomPrices]);
console.log(result);

/**
Console output

✓ Test passed: Before tax is correct.
✓ Test passed: GST is correct.
✓ Test passed: PST is correct.
✓ Test passed: Sum is correct.

Tests passed: 4 of 4
> All tests passed

Great work! You got the right answer.
Your code returned:

        Before tax: $1504.95
        GST: $75.25
        PST: $120.40
        -----------------
        Sum total: $1700.59
    
 */
