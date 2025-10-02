/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

export class Backpack {
  constructor(
    // Defines parameters:
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen
  ) {
    // Define properties:
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
      left: strapLengthL,
      right: strapLengthR,
    };
    this.lidOpen = lidOpen;
  }
  // Add methods like normal functions:
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
}

export class Kast {
  constructor(
    //Parameters
    lengthe,
    breedte,
    kleur,
    aspact,
    blueberry,
    model,
    kastOpen
  ) {
    // Properties
    this.lengthe = lengthe;
    this.breedte = breedte;
    this.kleur = kleur;
    this.kledingStukken = {
      kledingAspact: aspact,
      kledingBlue: blueberry,
    };
    this.model = model;
    this.kastOpen = kastOpen;
  }
  // Functies toevoegen
  toggelKast(kastStatus) {
    this.kastOpen = kastStatus;
  }
  newKledingAantal(aspact, blueberry) {
    this.kledingStukken.kledingAspact = aspact;
    this.kledingStukken.kledingBlue = blueberry;
  }
}
