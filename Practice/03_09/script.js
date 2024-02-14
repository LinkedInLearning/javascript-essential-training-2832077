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
  lidOpen: true,
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
  /**
   *  a method for each object property to replace the current property value with the received value
   *
   * @param {*} name
   */
  setName: function (name) {
    this.name = name;
  },
  setVolume: function (volume) {
    this.volume = volume;
  },
  /**
   * Set property value in one dynamic method passing the paramenters
   *
   * @param {*} property name of the property
   * @param {*} value new value of the property
   */
  setPropertyValue: function (property, value) {
    if (property in this) {
      this[property] = value;
    }
  },
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);

backpack.setPropertyValue("pocketNum", 20);
console.log("The new pocketNum value:", backpack.pocketNum);

backpack.setName("My customized backpack");
backpack.setVolume(40);
backpack.newStrapLength(25, 26);
backpack.toggleLid(false);
console.log("The backpack object after changes:", backpack);
