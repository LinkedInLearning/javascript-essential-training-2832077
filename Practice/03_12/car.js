/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class car {
  constructor(name, year, color, passengers, doors, doorsOpen) {
    this.name = name;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.doors = doors;
    this.doorsOpen = doorsOpen;
  }

  // method to open the door
  toggleDoors(doorChange) {
    this.doorsOpen = doorChange;
  }
}

export default car;
