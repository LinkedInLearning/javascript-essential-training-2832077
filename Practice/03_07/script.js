/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// eslint-disable-next-line no-unused-vars
const boxCigarettes = {
  name: "L.A ICE",
  volume: 16,
  size: {
    width: 5,
    length: 15,
  },
  material: "Stainles",
  boxOpen: false,
  methodOpen: "Button",
  toggleLid: function (boxStatus) {
    this.boxOpen = boxStatus;
  },
  pressButton: {
    inPress: "Open Box",
    outPress: "Close Box",
  },
  onPressButton: function (xInPress, xOutPress) {
    (this.pressButton.inPress = xInPress),
      (this.pressButton.outPress = xOutPress);
  },
};

// console.log("This object box cigarettes", boxCigarettes);
// console.log("This properties volume: ", boxCigarettes.volume);
// console.log("This properties size width: ", boxCigarettes.size.width);
// console.log("This properties value size: ", boxCigarettes.size);

// console.log("value before press button: ", boxCigarettes.pressButton.inPress);
// boxCigarettes.onPressButton("Openn", "Closee");
// console.log("value after press button: ", boxCigarettes.pressButton.inPress);
