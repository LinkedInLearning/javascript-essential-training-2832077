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
};


const desk = {
  width: 120,
  height: 40,
  length: 50,
  legs: 4,
  legsLength: {
    rightFront: 35,
    rightBack: 35,
    leftFront: 35,
    leftBack:35
  },
  tableArea: 0.48,
  monitorOpen: false,
  monitorChangeStatus: function (monitorStatus){
    this.monitorOpen = monitorStatus;
    console.log("monitorOpen status changed");
  }
}


console.log("The backpack object:", backpack);
