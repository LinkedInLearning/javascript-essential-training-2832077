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

const Home = {
  name: "mountbelRd",
  no: 24,
  type: "Address - Duplex",
  people: {
    p1: {
      name: "zaid",
      age: 21
    },
    p2: {
      name: "uzy",
      age: 22
    }, 
  },
  isOwner: false
}
console.log("The backpack object:", backpack);
console.log("The Home object:", Home);
console.log("People:", Home.people);
console.log("Age of p1", Home.people.p1.age, "Name of p2", Home.people.p2.name);
