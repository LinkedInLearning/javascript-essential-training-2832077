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
  realName: function (echteNaam) {
    this.name = echteNaam;
  },
  volume: 30,
  realVolume: function (echteVolume) {
    this.volume = echteVolume;
  },
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
};

console.log("Naam functie:");
console.log(backpack.name);
backpack.realName("Adam");
console.log(backpack.name);

console.log("");

console.log("Volume functie:");
console.log(backpack.volume);
backpack.realVolume(100);
console.log(backpack.volume);
