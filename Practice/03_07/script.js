/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Bir masa nesnesi oluşturuyoruz
const masa = {
  renk: "kahverengi",
  malzeme: "ahşap",
  ayakSayisi: 4,
  genişlik: 120,
  yükseklik: 75,
  derinlik: 60,
};

// Bir bilgisayar nesnesi oluşturuyoruz
const bilgisayar = {
  marka: "Dell",
  model: "XPS 15",
  islemci: "Intel Core i7",
  ram: "16GB",
  depolama: "512GB SSD",
  ekranBoyutu: 15.6,
  baglanti: {
    usb: 3,
    hdmi: 1,
    kulaklikGirisi: true,
  },
};

// Bir oda nesnesi oluşturuyoruz ve içine diğer nesneleri ekliyoruz
const oda = {
  isim: "Çalışma Odası",
  genislik: 300,
  yukseklik: 250,
  derinlik: 400,
  masa: masa,
  bilgisayar: bilgisayar,
  aydinlatma: "tavan lambası",
};

// Nesneleri tarayıcı konsolunda test edelim
console.log(oda);
console.log(oda.masa);
console.log(oda.bilgisayar);
console.log(oda.bilgisayar.baglanti);
console.log(oda.bilgisayar.baglanti.usb);
