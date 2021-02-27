/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Movie {
  constructor(
    // Define parameters:
    name,
    year,
    director,
    producers,
    length
  ) {
    // Define properties:
    this.name = name;
    this.year = year;
    this.director = director;
    this.producers = producers;
    this.length = length;
  }
  // Methods
  changeLength(newLength) {
    this.length = newLength;
  }
  updateProducers(newProducers) {
    this.producers = newProducers;
  }
}
export default Movie;
