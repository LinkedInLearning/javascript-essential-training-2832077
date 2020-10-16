const updateBackpack = (update) => {
  let main = document.querySelector("main");
  main.innerHTML = markup(backpack);
  console.info(update);
};

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
    updateBackpack(`Lid status changed.`);
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
    updateBackpack(`Strap lengths updated.`);
  },
};

export default backpack;
