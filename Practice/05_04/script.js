/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at traversing the DOM using JavaScript.
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
  "December 5, 2024 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const frogPack = new Backpack(
  "Frog Backpack",
  8,
  "green",
  3,
  10,
  10,
  false,
  "October 16, 2024 15:00:00 PST",
  "../assets/images/everyday.svg"
);

const main = document.querySelector(".maincontent");

const content = `<div class="page-header">
        <h2 class="page-header__heading">A pack for every purpose</h2>
        <p>
          If you're carrying a heavy load, you can't find a better tool than a
          backpack. Distributing the weight evenly across your shoulders, back,
          and hips, the backpack lets you use the natural frame of your body to
          literally <em>shoulder</em> the weight while your legs do the
          carrying.
        </p>
      </div>
      <article class="backpack" id="pack01">
        <figure class="backpack__image">
          <img src="../../assets/images/everyday.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">${everydayPack.name}</h1>
        <ul class="backpack__features">
          <li class="feature backpack__volume">Volume:<span> ${
            everydayPack.volume
          }L</span></li>
          <li class="feature backpack__color">Color:<span> ${
            everydayPack.color
          }</span></li>
          <li class="feature backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
          <li class="feature backpack__pockets">
            Number of pockets:<span> ${everydayPack.pocketNum}</span>
          </li>
          <li class="feature backpack__strap" data-side="left">
            Left strap length: <span>${
              everydayPack.strapLength.left
            } inches</span>
            <form class="leftlength" data-children-count="1">
              <input
                type="number"
                name="leftLength"
                placeholder="New left length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__strap" data-side="right">
            Right strap length: <span>${
              everydayPack.strapLength.right
            }inches</span>
            <form class="rightlength" data-children-count="1">
              <input
                type="number"
                name="rightLength"
                placeholder="New right length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__lid">Lid status: <span>${
            everydayPack.lidOpen
          }</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
      </article>
      <article class="backpack" id="pack02">
        <figure class="backpack__image">
          <img src="../../assets/images/frog.svg" alt="" loading="lazy" />
        </figure>
        <h1 class="backpack__name">${frogPack.name}</h1>
        <ul class="backpack__features">
          <li class="feature backpack__volume">Volume:<span> ${
            frogPack.volume
          }L</span></li>
          <li class="feature backpack__color">Color:<span> ${
            frogPack.color
          }</span></li>
          <li class="feature backpack__age">Age:<span> ${frogPack.backpackAge()} days old</span></li>
          <li class="feature backpack__pockets">
            Number of pockets:<span> ${frogPack.pocketNum}</span>
          </li>
          <li class="feature backpack__strap" data-side="left">
            Left strap length: <span>${frogPack.strapLength.left} inches</span>
            <form class="leftlength" data-children-count="1">
              <input
                type="number"
                name="leftLength"
                placeholder="New left length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__strap" data-side="right">
            Right strap length: <span>${
              frogPack.strapLength.right
            } inches</span>
            <form class="rightlength" data-children-count="1">
              <input
                type="number"
                name="rightLength"
                placeholder="New right length"
              />
              <button>Update</button>
            </form>
          </li>
          <li class="feature backpack__lid">Lid status: <span>${
            frogPack.lidOpen
          }</span></li>
        </ul>
        <button class="lid-toggle">Open lid</button>
      </article>`;

main.innerHTML = content;
