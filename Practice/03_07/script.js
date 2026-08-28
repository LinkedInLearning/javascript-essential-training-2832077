/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
const cricketBat = {
    name: "SG BAT",
    Timber: "English Willow",
    palyersThatuse: {
        india:{
            player1: "Virat Kohli",
            player2: "Rohit Sharma",
        },
        australia:{
            player1: "Steve Smith",
            player2: "David Warner",
        },
        newzealand:{
            player1: "Kane Williamson",
            player2: "Ross Taylor",
        }
    },
    weight: 1.2,
    size: {
        length: 85,
        width: 10,
    },
    warranty: true,
    price: 10000,
    used: false,
    thebatisused: function (used) {
        this.used = used;
        if (this.used === true) {
            console.log(`The bat is used.`);
        }else{
            console.log(`The bat is not used.`);
        }
        
        
    }
}

console.log(cricketBat);
