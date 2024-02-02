const Vehicle = require("./vehicle.js");
// const ElectricBicycle = require("./electric-bicycle.js");
// const Review = require("./review.js");
// const Tester = require("./tester.js");

class Bicycle extends Vehicle {
  constructor(modelName, year, price, style, frameSize, tireSize, reviews = []) {
    super(modelName, year, price, reviews = []);
    this.style = style;
    this.frameSize = frameSize;
    this.tireSize = tireSize;
  }
}
let bicycle = new Bicycle("Trek 520", 2023, 1829);
console.log(`bicyle: `, bicycle);

let bicycle2 = new Bicycle("Specialized", 2010, 600, "Touring", 18, 26);
console.log(`bicycle2: `, bicycle2);

module.exports = Bicycle;
