/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const movie = {
  name: "Amityville: The Awakening",
  lengthMins: 127,
  year: "2017",
  Genre: "Horror",
  stars: {
    actress1: "Jennifer Jason Leigh",
    actress2: "Bella thorne",
  },
  watched: false,
  producers: ["Tim", "Tom", "Trey"],
  setWatched: function (a) {
    // set watched to true or false
    this.watched = a;
    console.log(this.watched);
  },
};

console.log(movie);
console.log("The second producer is:", movie.producers[1]);

const book = {
  name: "Catch a fire",
  year: "1990",
  author: {
    name: "Tim White",
    age: 60,
    country: "USA",
  },
  pages: 450,
  "was it good": false,
  genre: "Biography",
};

console.log(book["author"]["country"]);
console.log(book["was it good"]);
