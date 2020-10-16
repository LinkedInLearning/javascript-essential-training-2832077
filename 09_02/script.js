/**
 * Events aplenty.
 * @link https://developer.mozilla.org/en-US/docs/Web/Events
 */

const container = document.querySelector(".container");
const button = document.querySelector(".cta-button");
const posX = document.querySelector(".posX span");
const posY = document.querySelector(".posY span");

// Log when the button is clicked in the console.
button.addEventListener("click", () => {
  button.classList.toggle("active");
  console.log("Button was clicked!");
}, false);

// Update the x and y displays to show the current mouse position.
const mousePosition = (event) => {
  posX.innerText = event.pageX;
  posY.innerText = event.pageY;
};

window.addEventListener("mousemove", mousePosition, false);

// Change the color of the box when the mouse enters.
container.addEventListener(
  "mouseenter",
  () => {
    container.classList.add("blue");
  },
  false
);

container.addEventListener(
  "mouseleave",
  () => {
    container.classList.remove("blue");
  },
  false
);
