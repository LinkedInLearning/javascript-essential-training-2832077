/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

const tipCalculator = () => {
  let sum = 29.95;
  let percentage = 18;
  let tip = sum * (percentage / 100);
  let total = sum + tip;
  console.log(`
  Sum before tip: ${sum}
  Tip percentage: ${percentage}%
  Tip:            ${tip.toFixed(2)}
  Total:          ${total.toFixed(2)}
`);
};

tipCalculator();
