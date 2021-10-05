/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from './Backpack.js'

const everydayPack = new Backpack(
  'Everyday Backpack',
  30,
  'grey',
  15,
  26,
  26,
  false
)

console.log('The everydayPack object:', everydayPack)
console.log('The color value:', everydayPack.color)
