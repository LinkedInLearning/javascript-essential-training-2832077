/**
 * Create a Backpack object.
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
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
  newColor: function(newColor){
    this.color = newColor;
  }
};

console.log("The backpack object:", backpack);
console.log("The pocketNum value:", backpack.pocketNum);


console.log("BEFORE", backpack.strapLength);

backpack.newStrapLength(30, 30);

console.log("AFTER", backpack.strapLength);

console.log("COLOR BEFORE", backpack.color);

backpack.newColor("black");

console.log("COLOR AFTER", backpack.color);