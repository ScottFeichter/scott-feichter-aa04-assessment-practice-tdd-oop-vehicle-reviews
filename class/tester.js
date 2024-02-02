// const Vehicle = require("./vehicle.js");
// const Bicycle = require("./bicycle.js");
// const ElectricBicycle = require("./electric-bicycle.js");
// const Review = require("./review.js");

class Tester {
  constructor(name, reviews = []) {
    this.name = name;
    this.reviews = reviews;
  }
}

module.exports = Tester;
