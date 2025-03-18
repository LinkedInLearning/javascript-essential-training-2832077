/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },

  newBackpack: function (nameChange) {
    this.name = nameChange;
  },

  newColor: function (colorChange) {
    this.color = colorChange;
  },
};

console.log("The backpack object:", backpack);

console.log("Today I will take the", backpack.name);

backpack.newBackpack("Adventure Backpack");

console.log("I'm going on a hike and will take", backpack.name);

backpack.newColor("blue");
console.log("and the color will be", backpack.color);
