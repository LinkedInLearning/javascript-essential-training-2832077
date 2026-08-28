// class Name {}
// const Name = class {}

// eslint-disable-next-line no-unused-vars
const Box = class {
  constructor(name, volume, lidOpen, strapLengthL, strapLengthR) {
    (this.name = name), (this.volume = volume), (this.lidOpen = lidOpen);
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
  }

  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }

  newStrapLength(strapLeft, strapRight) {
    this.strapLengthL = strapLeft;
    this.strapLengthR = strapRight;
  }
};

export default Box;
