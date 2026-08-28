/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

// Ayakkabı sınıfını tanımlama
class Shoe {
  constructor(
    // Parametreleri tanımlama:
    brand,
    size,
    color,
    type,
    isWorn
  ) {
    // Özellikleri tanımlama:
    this.brand = brand;
    this.size = size;
    this.color = color;
    this.type = type; // Spor ayakkabı, günlük ayakkabı, vs.
    this.isWorn = isWorn; // Giyilmiş mi giyilmemiş mi
  }

  // Metodları normal fonksiyonlar gibi ekleme:
  wear() {
    this.isWorn = true;
    console.log(`${this.brand} ayakkabı giyildi.`);
  }

  clean() {
    this.isWorn = false;
    console.log(`${this.brand} ayakkabı temizlendi.`);
  }

  changeColor(newColor) {
    this.color = newColor;
    console.log(
      `${this.brand} ayakkabının rengi ${newColor} olarak değiştirildi.`
    );
  }
}

// Sınıftan nesneler oluşturma
const sportShoe = new Shoe("Nike", 42, "siyah", "Spor", false);
const casualShoe = new Shoe("Adidas", 41, "beyaz", "Günlük", true);
const formalShoe = new Shoe("Gucci", 43, "kahverengi", "Klasik", false);

// Nesneleri ve metodları test edelim:
console.log("Başlangıç durumu:", sportShoe);
sportShoe.wear();
console.log("Giyildikten sonra:", sportShoe);

console.log("Başlangıç durumu:", casualShoe);
casualShoe.clean();
console.log("Temizlendikten sonra:", casualShoe);

console.log("Başlangıç durumu:", formalShoe);
formalShoe.changeColor("siyah");
console.log("Renk değiştirildikten sonra:", formalShoe);
