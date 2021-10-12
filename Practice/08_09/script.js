/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const backPackMaker = (backPack) => {

  const container = document.createElement("article");

  container.innerHTML = `
  <h1 class="backpack__name">${frogpack.name}</h1>
  <ul class="backpack__features">
    <li class="packprop backpack__volume">Volume:<span> ${
      frogpack.volume
    }l</span></li>
    <li class="packprop backpack__color">Color:<span> ${
      frogpack.color
    }</span></li>
    <li class="packprop backpack__pockets">Number of pockets:<span> ${
      frogpack.pocketNum
    }</span></li>
    <li class="packprop backpack__strap">Left strap length:<span> ${
      frogpack.strapLength.left
    } inches</span></li>
    <li class="packprop backpack__strap">Right strap length:<span> ${
      frogpack.strapLength.right
    } inches</span></li>
    <li class="feature backpack__lid">Lid status:<span> ${
      frogpack.lidOpen ? "open" : "closed"
    }</span></li>
  </ul>  
  `

  return container;

}


const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "../../assets/images/frog.svg",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};


const imageCreator = (imageLink, ImageCaption) => {

  const imageContainer = document.createElement("figure");

  const caption = document.createElement("figcaption");

  caption.textContent = ImageCaption;

  const image = document.createElement("img");

  image.src=imageLink;

  image.alt="A Frog-themed Backpack";

  image.style.width="5em";

  imageContainer.append(image);

  imageContainer.append(caption);

  //Styling

  caption.style.marginTop="1em";

  imageContainer.style.display="flex";

  imageContainer.style.flexDirection="column";

  imageContainer.style.alignItems="center";

  return imageContainer;

}



// Creating root in HTML for insertion

const root = document.querySelector("main");

//Creates and displays most backpack information

root.append(backPackMaker(frogpack));

//Creates accompanying figure / image and appends to root

root.append(imageCreator(frogpack.image, "Our Latest and Most Froggie Backpack"));

root.style.display="flex";

root.style.flexDirection="column";

root.style.alignItems="center";



//OG FILE BOILERPLATE 

// Baseline HTML output
// const content = `
//     <h1 class="backpack__name">${frogpack.name}</h1>
//     <ul class="backpack__features">
//       <li class="packprop backpack__volume">Volume:<span> ${
//         frogpack.volume
//       }l</span></li>
//       <li class="packprop backpack__color">Color:<span> ${
//         frogpack.color
//       }</span></li>
//       <li class="packprop backpack__pockets">Number of pockets:<span> ${
//         frogpack.pocketNum
//       }</span></li>
//       <li class="packprop backpack__strap">Left strap length:<span> ${
//         frogpack.strapLength.left
//       } inches</span></li>
//       <li class="packprop backpack__strap">Right strap length:<span> ${
//         frogpack.strapLength.right
//       } inches</span></li>
//       <li class="feature backpack__lid">Lid status:<span> ${
//         frogpack.lidOpen ? "open" : "closed"
//       }</span></li>
//     </ul>  
// `;
