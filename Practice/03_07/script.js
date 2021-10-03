/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const gamingRig = {
    console: "Xbox One",
    controller: "Xbox One Controller",
    gameFormat: "digital",
    game: "Battlefield",
    friends: {
        name1: "Jesse",
        name2: "Brody",
        name3: "Chris"
    }
}

console.log("Gaming Rig 1", gamingRig);

const gamingRigTwo = {...gamingRig};

console.log("Gaming Rig 2", gamingRigTwo)