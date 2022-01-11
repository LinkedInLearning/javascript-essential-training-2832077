/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const box = {
  name: "Tiffin Box",
  tiffinLength: {
  height: 2,
  width: 3,
  },
  color: "pink",
  compartment: 2,
  
  lidOpen: false,
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newTiffinLength: function (tiffinHeight, tiffinWidth) {
    this.tiffinLength.height = tiffinHeight;
    this.tiffinLength.width = tiffinWidth;
  }
 };
