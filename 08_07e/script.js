/**
 * Passing data to functions through parameters.
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */


//Sum Before Tip
//Tip Percentage
//Tip 
//Total

const formatter = (number) => {

  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number);
}


const tipCalculator = (currency, preTipSum, tipPercent ) => {


  let tip = (preTipSum*(tipPercent/100).toFixed(2));
  let total = (preTipSum+tip).toFixed(2);
  const tipObject = document.createElement("article");


  tipObject.innerHTML = `

    <h1>Transaction Summary</h1>
    <p>Sum Before Tip: ${currency}${preTipSum}</p>
    <p>Tip Percentage: ${tipPercent}%</p>
    <p>Tip: ${currency}${tip}</p>
    <p>Final Total: ${currency}${total}</p>
  `

  console.log(tipObject)
  return tipObject;


}

let main = document.querySelector("main");

main.append(tipCalculator("$", 507, 21));



// const tipCalculator = (sum, percentage, currency, prefix) => {
//   let tip = sum * (percentage / 100);
//   let total = sum + tip;
//   if (prefix) {
//     console.log(`
//       Sum before tip: ${currency}${sum}
//       Tip percentage: ${percentage}%
//       Tip:            ${currency}${tip.toFixed(2)}
//       Total:          ${currency}${total.toFixed(2)}
//     `);
//   } else {
//     console.log(`
//       Sum before tip: ${sum}${currency}
//       Tip percentage: ${percentage}%
//       Tip:            ${tip.toFixed(2)}${currency}
//       Total:          ${total.toFixed(2)}${currency}
//     `);
//   }
// };

// tipCalculator(29.95, 18, "kr", false);
