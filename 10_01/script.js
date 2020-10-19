/**
 * Solution: Create an event listener
 * - Add event listeners to each of the strap length forms.
 * - Update strap length value with value submitted from form.
 */
import backpackObjectArray from "./components/data.js";

/**
 * Add event listener to the lid-toggle button.
 */
const lidToggle = function (event, button, newArg) {
  console.log(event);
  console.log(newArg);

  // Find the current backpack object in backpackObjectArray
  let backpackObject = backpackObjectArray.find(
    ({ id }) => id === button.parentElement.id
  );

  // Toggle lidOpen status
  backpackObject.lidOpen == true
    ? (backpackObject.lidOpen = false)
    : (backpackObject.lidOpen = true);

  // Toggle button text
  button.innerText == "Open lid"
    ? (button.innerText = "Close lid")
    : (button.innerText = "Open lid");

  // Set visible property status text
  let status = button.parentElement.querySelector(".backpack__lid span");
  status.innerText == "closed"
    ? (status.innerText = "open")
    : (status.innerText = "closed");
};

/**
 * Strap length functionality
 */
const newStrapLength = (strapArray) => {
  console.log(strapArray);
  // Loop through each element on the list
  strapArray.forEach((listElement) => {
    // Get what side we are working with
    let side = listElement.getAttribute("data-side");
    console.log(side);

    // Create a new form element
    const lengthForm = document.createElement("form");
    lengthForm.classList.add(`${side}length`);

    // Populate form with an input and a button
    lengthForm.innerHTML = `
      <input type="number" name="${side}Length" placeholder="New ${side} length">
      <button>Update</button>
    `;

    // Add event listener to the form submit action
    lengthForm.addEventListener("submit", (e) => {
      // Stop form from reloading the page
      e.preventDefault();

      // Get the value from the form input
      let newValue = lengthForm.querySelector("input").value;

      // Set the value of the field
      listElement.querySelector("span").innerHTML = `${newValue} inches`;

      // Clear the form input
      lengthForm.querySelector("input").value = "";
    });

    // Add form to the end of the list element
    listElement.append(lengthForm);
  });
};

const backpackList = backpackObjectArray.map((backpack) => {
  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack");
  backpackArticle.setAttribute("id", backpack.id);

  backpackArticle.innerHTML = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="feature backpack__strap" data-side="left">Left strap length: <span>${
        backpack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap" data-side="right">Right strap length: <span>${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status: <span>${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
    <button class="lid-toggle">Open lid</button>
  `;

  let strapLengths = backpackArticle.querySelectorAll(".backpack__strap");
  newStrapLength(strapLengths);

  let button = backpackArticle.querySelector(".lid-toggle");
  let newArg = "The argument I want to pass to the callback function!";

  // Add event listener
  button.addEventListener("click", (event) => {
    lidToggle(event, button, newArg);
  });

  return backpackArticle;
});

// Append each backpack item to the main
const main = document.querySelector(".maincontent");

backpackList.forEach((backpack) => {
  main.append(backpack);
});
