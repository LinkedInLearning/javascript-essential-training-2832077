/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

const everydayPack = new Backpack(
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
);

backpackObjectArray.push(everydayPack);


const contentCreator = (pack) => {

  return (
    `
    <figure class="backpack__image">
      <img src=${pack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${pack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        pack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        pack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${pack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        pack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        pack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        pack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        pack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>
  
`
  )
} 




const main = document.querySelector(".maincontent");


backpackObjectArray.forEach((bp)=>{
  let contentSection = document.createElement("article");
  contentSection.classList.add("backpack");
  contentSection.setAttribute("id", "everyday");
  contentSection.innerHTML=contentCreator(bp);
   
  main.prepend(contentSection);
})

// const newArticle = document.createElement("article");
// newArticle.classList.add("backpack");
// newArticle.setAttribute("id", "everyday");
// newArticle.innerHTML = content;

// main.append(newArticle);


// OG FILE BOILERPLATE

// const content = `
//     <figure class="backpack__image">
//       <img src=${everydayPack.image} alt="" />
//     </figure>
//     <h1 class="backpack__name">${everydayPack.name}</h1>
//     <ul class="backpack__features">
//       <li class="packprop backpack__volume">Volume:<span> ${
//         everydayPack.volume
//       }l</span></li>
//       <li class="packprop backpack__color">Color:<span> ${
//         everydayPack.color
//       }</span></li>
//       <li class="backpack__age">Age:<span> ${everydayPack.backpackAge()} days old</span></li>
//       <li class="packprop backpack__pockets">Number of pockets:<span> ${
//         everydayPack.pocketNum
//       }</span></li>
//       <li class="packprop backpack__strap">Left strap length:<span> ${
//         everydayPack.strapLength.left
//       } inches</span></li>
//       <li class="packprop backpack__strap">Right strap length:<span> ${
//         everydayPack.strapLength.right
//       } inches</span></li>
//       <li class="feature backpack__lid">Lid status:<span> ${
//         everydayPack.lidOpen ? "open" : "closed"
//       }</span></li>
//     </ul>
  
// `;