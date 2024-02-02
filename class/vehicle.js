// const Bicycle = require("./bicycle.js");
// const ElectricBicycle = require("./electric-bicycle.js");
// const Review = require("./review.js");
// const Tester = require("./tester.js");

class Vehicle {
  constructor(modelName, year, price, reviews = []) {
    this.modelName = modelName;
    this.year = year;
    this.price = price;
    this.reviews = reviews;
  }
  validate() {
    if (this.modelName && this.year && this.price) {
      if (this.year > 1950 && this.year < 2100) {
        return true;
      }
      return false;
    }
    return false;
  }
  update(modelName, year, price) {
    if (year < 1950 || year > 2100) {
      throw new Error("Year must be between 1950 and 2100");
    } else if (price <= 0) {
      throw new Error("Price must be greater than 0");
    }
    this.modelName = modelName;
    this.year = year;
    this.price = price;
  }
}

module.exports = Vehicle;
