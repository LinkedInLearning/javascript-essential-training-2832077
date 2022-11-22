/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
// const updateRiceCooker = (update) => {
//   let main = document.querySelector("main");
//   main.innerHTML = markup(riceCooker);
//   console.log(update);
// };

const riceCooker = {
  name: "Advance Rice Cooker",
  color: "white",
  price: 190000,
  size: {
    width: 30,
    height: 30,
    length: 30,
  },
  capacity: 1.8,
  isLidOpen: false,
  isCooking: false,
  isConnected: false,

  toggleLid: function (lidStatus) {
    this.isLidOpen = lidStatus;
    updateRiceCooker(`Lid status changed`);
  },
};

// const main = document.createElement("main");
// main.innerHTML = markup(riceCooker);
// document.body.appendChild(main);
