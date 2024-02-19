class Bed {
  constructor(size, numberOfPillows, maxPeople, made, lastSheetChange) {
    this.size = size;
    this.numberOfPillows = numberOfPillows;
    this.maxPeople = maxPeople;
    this.made = made;
    this.lastSheetChange = lastSheetChange;
  }

  makeBed(madeStatus) {
    this.made = madeStatus;
  }

  changeSheets() {
    this.lastSheetChange = new Date();
  }
}

export default Bed;
