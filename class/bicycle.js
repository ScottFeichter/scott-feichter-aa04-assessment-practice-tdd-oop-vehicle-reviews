const Vehicle = require("./vehicle.js");
// const ElectricBicycle = require("./electric-bicycle.js");
// const Review = require("./review.js");
// const Tester = require("./tester.js");

class Bicycle extends Vehicle {
  constructor(
    modelName,
    year,
    price,
    style,
    frameSize,
    tireSize,
    reviews = []
  ) {
    super(modelName, year, price, (reviews = []));
    this.style = style;
    this.frameSize = frameSize;
    this.tireSize = tireSize;
  }
}

module.exports = Bicycle;
