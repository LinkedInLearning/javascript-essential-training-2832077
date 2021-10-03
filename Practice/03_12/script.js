/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

class Supplement{
    constructor(
        name,
        size,
    ) {
        this.supplementName=name;
        this.supplementSize=size;
    }
    explanation(){
        console.log(`this supplement's name is ${this.supplementName} and it's size is ${this.supplementSize}`)
    }
}

const supp1 = new Supplement("Vitamin C", "medium");

console.log("Here's what supplement looks like", supp1);

supp1.explanation();

const newDate = new Date;

let newDate2 = newDate.toDateString();

supp1.date = newDate2;

console.log(supp1.date);