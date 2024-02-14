/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// Constant to hold data, defined with {} as object, properties separated by semicolon ,
const chair = {
  color: "gray",
  legs: {
    number: 4,
    height: 45,
    width: 3,
    depth: 3,
  },
  backRest: true,
  height: 105,
  seatHeight: 60,
  width: 50,
  depth: 55,
  inUse: false,
  toggleInUse: function (chairInUse) {
    this.inUse = chairInUse;
  },
};

console.log(chair);
console.log("Before toggleInUse: ", chair.inUse);
chair.toggleInUse(true);
console.log("After toggleInUse: " + chair.inUse);
console.log(`Chair number of legs: ${chair.legs.number}`);

const quiniela = {
  jornada: "33ª",
  fecha: new Date("14/01/2024"),
  equipos: [
    {
      local: "Rayo Vallecano",
      visitante: "Las Palmas",
      apuesta: "0",
    },
    {
      local: "Real Madrid",
      visitante: "Almería",
      apuesta: "1",
    },
  ],
  /**
   * Functions inside objects are called methods
   *
   * @param {*} partido
   * @param {*} apuesta
   */
  cambiarApuesta: function (partido, apuesta) {
    this.equipos[partido - 1].apuesta = apuesta;
  },
  plenoAlQuince: {
    local: "Villareal",
    resultadoLocal: 3,
    visitante: "Mallorca",
    resultadoVisitante: 1,
  },
};

console.log(quiniela);

console.log(
  `Apuesta partido 1 ${quiniela.equipos[0].local} ${quiniela.equipos[0].visitante}:  ${quiniela.equipos[0].apuesta}`
);

quiniela.cambiarApuesta(1, "2");
console.log(`Apuesta cambiada partido 1: ${quiniela.equipos[0].apuesta}`);

quiniela.equipos.forEach((partido, index) => {
  console.log(
    `Apuesta partido ${index + 1} ${partido.local} ${partido.visitante}:  ${
      partido.apuesta
    }`
  );
});
