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
  changeVolume: function (newVolume) {
    this.volume = newVolume;
  },
  changeColor: function (newColor) {
    this.color = newColor;
  },
  changePocketNum: function (newPocketNum) {
    this.pocketNum = newPocketNum;
  },
};

// Metodları test edelim
console.log("Başlangıç durumu:", backpack);

// Kapak durumunu değiştir
backpack.toggleLid(true);
console.log("Kapak durumu değiştirildi:", backpack.lidOpen);

// Askı uzunluğunu değiştir
backpack.newStrapLength(30, 30);
console.log("Askı uzunluğu değiştirildi:", backpack.strapLength);

// Hacmi değiştir
backpack.changeVolume(40);
console.log("Hacim değiştirildi:", backpack.volume);

// Rengi değiştir
backpack.changeColor("mavi");
console.log("Renk değiştirildi:", backpack.color);

// Cep sayısını değiştir
backpack.changePocketNum(20);
console.log("Cep sayısı değiştirildi:", backpack.pocketNum);
