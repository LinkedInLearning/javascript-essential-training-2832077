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

  newName: function (name) {
    this.name = name;
  },

  newVolume: function (volume) {
    this.volume = volume;
  },

  newPocketNum: function (pocketNum) {
    this.pocketNum = pocketNum;
  }

};

console.log("Original volume is:", backpack.volume)
backpack.newVolume(40)
console.log("New volume is: ", backpack.volume)

console.log("Original name is: ", backpack.name)
backpack.newName("Kiana's backpack")
console.log("New name is: ", backpack.name)

console.log("Original pocket number is: ", backpack.pocketNum)
backpack.newPocketNum(2)
console.log("New pocket number is: ", backpack.pocketNum)

console.log("Original left strap length is", backpack.strapLength.left)
backpack.newStrapLength(16, 14)
var newStrapLength = 1
newStrapLength = backpack.strapLength.left
console.log("New left strap lenght is: ", newStrapLength)



