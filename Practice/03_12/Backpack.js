/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

// Backpack sınıfı tanımlama
class Backpack {
  constructor(
    // Parametreleri tanımlama:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Özellikleri tanımlama:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }

  // Metodları normal fonksiyonlar gibi ekleme:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }

  // Yeni hacim belirleme metodu
  changeVolume(newVolume) {
    this.volume = newVolume;
  }

  // Yeni renk belirleme metodu
  changeColor(newColor) {
    this.color = newColor;
  }

  // Yeni cep sayısı belirleme metodu
  changePocketNum(newPocketNum) {
    this.pocketNum = newPocketNum;
  }
}

// Sınıfı dışa aktarma
export default Backpack;

// Yeni bir Backpack nesnesi oluşturalım ve metodları test edelim:
const myBackpack = new Backpack("Günlük Çanta", 30, "gri", 15, 26, 26, false);

console.log("Başlangıç durumu:", myBackpack);

// Kapak durumunu değiştir
myBackpack.toggleLid(true);
console.log("Kapak durumu değiştirildi:", myBackpack.lidOpen);

// Askı uzunluğunu değiştir
myBackpack.newStrapLength(30, 30);
console.log("Askı uzunluğu değiştirildi:", myBackpack.strapLength);

// Hacmi değiştir
myBackpack.changeVolume(40);
console.log("Hacim değiştirildi:", myBackpack.volume);

// Rengi değiştir
myBackpack.changeColor("mavi");
console.log("Renk değiştirildi:", myBackpack.color);

// Cep sayısını değiştir
myBackpack.changePocketNum(20);
console.log("Cep sayısı değiştirildi:", myBackpack.pocketNum);
