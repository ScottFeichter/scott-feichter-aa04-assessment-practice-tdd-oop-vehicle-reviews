// const Vehicle = require("./vehicle.js");
// const Bicycle = require("./bicycle.js");
// const ElectricBicycle = require("./electric-bicycle.js");
// const Tester = require("./tester.js");

class Review {
  constructor(vehicle, tester, starRating, text) {
    this.vehicle = vehicle;
    this.tester = tester;
    this.starRating = starRating;
    this.text = text;
  }
}

module.exports = Review;
