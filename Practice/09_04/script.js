/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const body = document.querySelector("body");
const grid = document.querySelector(".grid");
const gridCells = document.querySelectorAll(".cell");
const randColor = () => {
  let hexColor = Math.floor(Math.random() * 16777215).toString(16);
  return hexColor;
};

grid.addEventListener("mouseenter", (event) => {
  grid.classList.add("inside");
});

grid.addEventListener("mouseleave", (event) => {
  grid.classList.remove("inside");
});

gridCells.forEach((cell) => {
  cell.addEventListener("mouseenter", (event) => {
    cell.style.backgroundColor = `#${randColor()}`;
  });
  cell.addEventListener("click", (event) => {
    cell.style.backgroundColor = "";
  });
});

body.addEventListener("keypress", (key) => {
  if (key.code === "KeyB") {
    body.classList.remove("white");
    body.classList.add("black");
  } else if (key.code === "KeyW") {
    body.classList.remove("black");
    body.classList.add("white");
  }
  console.log(`Key pressed ${key}`);
});
