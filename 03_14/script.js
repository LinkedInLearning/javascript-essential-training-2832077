/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

// Book sınıfı tanımlama
class Book {
  constructor(title, author, genre, yearPublished, pages) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.yearPublished = yearPublished;
    this.pages = pages;
  }

  // Kitap bilgilerini gösteren metod
  displayInfo() {
    console.log(
      `${this.title} yazarı ${this.author}, ${this.yearPublished} yılında yayımlanmış ve ${this.pages} sayfadır. Tür: ${this.genre}`
    );
  }
}

// Beş farklı kitap nesnesi oluşturma
const book1 = new Book("1984", "George Orwell", "Distopya", 1949, 328);
const book2 = new Book("Savaş ve Barış", "Lev Tolstoy", "Roman", 1869, 1225);
const book3 = new Book(
  "Harry Potter ve Felsefe Taşı",
  "J.K. Rowling",
  "Fantastik",
  1997,
  223
);
const book4 = new Book("Bülbülü Öldürmek", "Harper Lee", "Roman", 1960, 281);
const book5 = new Book(
  "Küçük Prens",
  "Antoine de Saint-Exupéry",
  "Çocuk",
  1943,
  96
);

// Nesneleri ve metodları test etme
book1.displayInfo();
book2.displayInfo();
book3.displayInfo();
book4.displayInfo();
book5.displayInfo();
