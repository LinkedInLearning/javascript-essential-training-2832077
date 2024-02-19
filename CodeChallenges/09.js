// JavaScript code​​​​​​‌​‌​‌​‌​​​​‌​‌​​‌‌​​‌​‌​‌ below
// Change these values to control whether you see
// the expected answer and/or hints.
const showExpectedResult = false;
const showHints = false;

function updatePage(document) {
  // Your code goes here.
  const updateForms = document.querySelectorAll("form");

  updateForms.forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const target = event.target.getAttribute("data-target");
      console.log(target);
      const inputElement = document.getElementById(`${target}-input`);
      const targetElement = document
        .getElementById(target)
        .querySelector(".value");
      targetElement.textContent = inputElement.value;
    });
  });

  // <p class="info-item" id="name">Name: <span class="value">Adventure Backpack</span></p>
}

updatePage(document);

// This is how your code will be called.
// Your answer should be the HTML output described in the challenge text.
// You can edit this code to try different testing cases.
const inputs = [
  { id: "name-input", value: "Adventure Backpack" },
  {
    id: "description-input",
    value: "A durable backpack for outdoor adventures",
  },
  { id: "color-input", value: "Green" },
  { id: "volume-input", value: "35L" },
];

/*

Console output

name
description
color
volume
✓ Test passed: Display name value.
✓ Test passed: Display description value.
✓ Test passed: Display color value.
✓ Test passed: Display volume value.
✓ Test passed: Output matches test case.

Tests passed: 5 of 5
> All tests passed

Correct
Your code returned:
<div id="info">
    <p class="info-item" id="name">Name: <span class="value">Adventure Backpack</span></p>
    <form id="update-name">
        <label for="name-input">Update Name:</label>
        <input type="text" id="name-input">
        <button type="submit" data-target="name">Update</button>
    </form>
    <p class="info-item" id="description">Description: <span class="value">A durable backpack for outdoor adventures</span></p>
    <form id="update-description">
        <label for="description-input">Update Description:</label>
        <input type="text" id="description-input">
        <button type="submit" data-target="description">Update</button>
    </form>
    <p class="info-item" id="color">Color: <span class="value">Green</span></p>
    <form id="update-color">
        <label for="color-input">Update Color:</label>
        <input type="text" id="color-input">
        <button type="submit" data-target="color">Update</button>
    </form> 
    <p class="info-item" id="volume">Volume: <span class="value">35L</span></p>
    <form id="update-volume">
        <label for="volume-input">Update Volume:</label>
        <input type="text" id="volume-input">
        <button type="submit" data-target="volume">Update</button>
    </form>
  </div>
*/
