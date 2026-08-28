/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";

const backpackObjectArray = [
  new Backpack(
    "pack01",
    "Everyday Backpack",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST",
    "../assets/images/everyday.svg"
  ),
  new Backpack(
    "pack02",
    "Hiking Backpack",
    50,
    "blue",
    20,
    30,
    30,
    true,
    "January 1, 2020 10:00:00 PST",
    "../assets/images/hiking.svg"
  ),
  // Daha fazla sırt çantası nesnesi ekleyin
];

const main = document.querySelector(".maincontent");

backpackObjectArray.forEach((backpack) => {
  const content = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="${backpack.name}" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

  const newArticle = document.createElement("article");
  newArticle.classList.add("backpack");
  newArticle.setAttribute("id", backpack.id);
  newArticle.innerHTML = content;

  main.append(newArticle);
});
