/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const penjar = {
  name: 'Everyday penjar',
  volume: 15,
  color: 'yellow',
  numPen: 15,
  lidOpen: true,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus
  },
}
// Added the console
console.log('The penjar object:', penjar)
console.log('The numPen value:', penjar.numPen)
console.log('The lid is open:', penjar.lidOpen)

var query = 'penjar'

console.log('The penjar value:', penjar[query])
