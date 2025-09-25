/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const persoon = {
  voornaam: "Adam",
  achternaam: "Saber",
  lengthe: "180cm",
};
console.log("Dit is de persoon object:", persoon);

const kast = {
  lengthe: "1 meter",
  breedte: "70 centimeter",
  hooghte: "80 centimeter",
  doos: {
    schoenen: "Nike Air Max",
    jas: "North Face",
  },
  jassen: 50,
  licht: () => {
    return "Dit is een functie";
  },
};
console.log("Dit is de kast object:", kast);
console.log("De kast lengthe is:", kast.lengthe);
console.log("Dit is de nested object:", kast.doos);
console.log("Dit zijn de schoenen in de doos:", kast.doos.schoenen);
console.log(kast.licht());
