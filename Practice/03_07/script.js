/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const house = {
    year: "1973",
    make: "Duplex",
    color: "Cream",
    model: {
        Side1: "two bedroom two bath",
        Side2: "One bedroom one bath"
    },
    houseOpen: false,
    newModel: function( Right, left) {
        this.model.Side1 = Right;
        this.model.Side2 = left;
    },

};

console.log (house.newModel);