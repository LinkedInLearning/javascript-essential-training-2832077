// JavaScript code​​​​​​‌​‌​‌​​‌‌‌‌​​‌‌​‌‌‌​​‌‌​​ below
// Change these values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

// Set up the Backpack class
class Backpack {
  constructor(id, name, volume, color, pocketNum, dateAcquired) {
    this.id = id;
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.dateAcquired = dateAcquired;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24));
    return daysSinceAcquired;
  }
}

// Create new Backpack object
const everydayPack = new Backpack(
  "pack01",
  "Everyday Backpack",
  30,
  "grey",
  15,
  "December 5, 2018 15:00:00 PST"
);

// Create new Backpack object
const frogPack = new Backpack(
  "pack02",
  "Frog Backpack",
  8,
  "green",
  3,
  "October 16, 2019 15:00:00 PST"
);

// Add Backpack objects into an array
const backpackObjectArray = [everydayPack, frogPack];

/**
 * Testing code doing the loop in different ways to practice
 */

function createBackpackMarkupFor(document) {
  // Replace the code below with the correct solution:
  let content = "";
  for (let index = 0; index < backpackObjectArray.length; index++) {
    const element = backpackObjectArray[index];
    content += `
    <article id="${element.id}">
    <h1>${element.name}</h1>
    <ul>
        <li>Volume:<span> ${element.volume}l</span></li>
        <li>Color:<span> ${element.color}</span></li>
        <li>Age:<span> ${element.backpackAge()} days old</span></li>
        <li>Number of pockets:<span> ${element.pocketNum}</span></li>
    </ul>
    </article>
    `;
  }

  return content;
}

var div = document.createElement("div");
div.innerHTML = createBackpackMarkupFor(document);
document.body.append(div);

function createBackpackMarkupForOf(document) {
  // Replace the code below with the correct solution:
  let content = "";
  for (const element of backpackObjectArray) {
    //   const element = backpackObjectArray[index];
    content += `
      <article id="${element.id}">
      <h1>${element.name}</h1>
      <ul>
          <li>Volume:<span> ${element.volume}l</span></li>
          <li>Color:<span> ${element.color}</span></li>
          <li>Age:<span> ${element.dateAcquired} days old</span></li>
          <li>Number of pockets:<span> ${element.pocketNum}</span></li>
      </ul>
      </article>
      `;
  }

  return content;
}
var section = document.createElement("section");
section.innerHTML = createBackpackMarkupForOf(document);
document.body.append(section);

function createBackpackMarkupForEach(document) {
  // Replace the code below with the correct solution:
  let content = "";
  backpackObjectArray.forEach((element) => {
    let art = document.createElement("article");
    art.setAttribute("id", element.id);
    // content += `
    //       <article id="${element.id}">
    art.innerHTML = `
          <h1>${element.name}</h1>
          <ul>
              <li>Volume:<span> ${element.volume}l</span></li>
              <li>Color:<span> ${element.color}</span></li>
              <li>Age:<span> ${element.backpackAge()} days old</span></li>
              <li>Number of pockets:<span> ${element.pocketNum}</span></li>
          </ul>
          </article>
          `;
  });
  console.log(content);
  return content;
}
var div2 = document.createElement("div");
div2.innerHTML = createBackpackMarkupForEach(document);
document.body.append(div2);

/**
 * Final code
 */

// JavaScript code​​​​​​‌​‌​‌​​‌‌‌‌​​‌‌​‌‌‌​​‌‌​​ below
// Change these values to control whether you see
// the expected answer and/or hints.

function createBackpackMarkup(document) {
  // Replace the code below with the correct solution:
  const content = backpackObjectArray.map((backpack) => {
    let backpackArticle = document.createElement("article");
    backpackArticle.setAttribute("id", backpack.id);

    backpackArticle.innerHTML = `
            <h1>${backpack.name}</h1>
            <ul>
                <li>Volume:<span>${backpack.volume}l</span></li>
                <li>Color:<span>${backpack.color}</span></li>
                <li>Age:<span>${backpack.backpackAge()} days old</span></li>
                <li>Number of pockets:<span>${backpack.pocketNum}</span></li>
            </ul>
            `;
    return backpackArticle;
  });

  return content;
}

// This is how your code will be called.
// Your answer should be the HTML output described in the challenge text.
// You can edit this code to try different testing cases.
const backpacksMarkupArray = createBackpackMarkup(document);
// Combine the array items into a single output.
const result = backpacksMarkupArray.reduce((combinedHTML, backpack) => {
  return combinedHTML + backpack.outerHTML;
}, "");
console.log(result);
/**
 * Console output

✓ Test passed: Use map() method.
✓ Test passed: Use document.createElement() method.
✓ Test passed: Use setAttribute() method.
✕ Test failed: Output matches test case.

Tests passed: 3 of 4
> Some tests passed

Incorrect. Revisit the question 
Your code returned:
<article id="pack01">
            <h1>Everyday Backpack</h1>
            <ul>
                <li>Volume:<span>30l</span></li>
                <li>Color:<span>grey</span></li>
                <li>Age:<span>1895 days old</span></li>
                <li>Number of pockets:<span>15</span></li>
            </ul>
            </article><article id="pack02">
            <h1>Frog Backpack</h1>
            <ul>
                <li>Volume:<span>8l</span></li>
                <li>Color:<span>green</span></li>
                <li>Age:<span>1580 days old</span></li>
                <li>Number of pockets:<span>3</span></li>
            </ul>
            </article>

--- -- -- -- -- -- -- -- -- -- -- --
Need help?
* Set 'showExpectedResult' to 'true' to see the correct value.
* Set 'showHints' to 'true' to see a hint.

 */

var div3 = document.createElement("div");
div3.innerHTML = createBackpackMarkup(document);
document.body.append(div2);
