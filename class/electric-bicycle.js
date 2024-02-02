// const Vehicle = require("./vehicle.js");
const Bicycle = require("./bicycle.js");
// const Review = require("./review.js");
// const Tester = require("./tester.js");

class ElectricBicycle extends Bicycle {
  constructor(
    modelName,
    year,
    price,
    style,
    frameSize,
    tireSize,
    range,
    maxSpeed,
    reviews = []
  ) {
    super(style, frameSize, tireSize, (reviews = []));
    this.range = range;
    this.maxSpeed = maxSpeed;
  }
}

module.exports = ElectricBicycle;
