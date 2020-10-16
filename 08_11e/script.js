/**
 * Create a new element and append it to the <main> element.
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
 * @link https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const content = `
    <figure class="backpack__image">
      <img src=${everydayPack.image} alt="" loading="lazy" />
    </figure>
    <h1 class="backpack__name">${everydayPack.name}</h1>
    <ul class="backpack__features">
      <li class="feature backpack__volume">Volume:<span> ${
        everydayPack.volume
      }l</span></li>
      <li class="feature backpack__color">Color:<span> ${
        everydayPack.color
      }</span></li>
      <li class="feature backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
      <li class="feature backpack__pockets">Number of pockets:<span> ${
        everydayPack.pocketNum
      }</span></li>
      <li class="feature backpack__strap">Left strap length:<span> ${
        everydayPack.strapLength.left
      } inches</span></li>
      <li class="feature backpack__strap">Right strap length:<span> ${
        everydayPack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        everydayPack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  `;

const main = document.querySelector(".maincontent");

const newArticle = document.createElement("article");
newArticle.classList.add("backpack");
newArticle.setAttribute("id", "everyday");
newArticle.innerHTML = content;

main.append(newArticle);
