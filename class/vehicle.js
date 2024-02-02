// const Bicycle = require("./bicycle.js");
// const ElectricBicycle = require("./electric-bicycle.js");
const Review = require("./review.js");
const Tester = require("./tester.js");

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
  getDetails() {
    return `The ${this.year} ${this.modelName} costs $${this.price} and has ${this.reviews.length} reviews.`;
  }
  findReviewByTester(testerName) {
    for (let review of this.reviews) {
      console.log("review of this.reviews", review);
      for (let key in review) {
        console.log("key in review", key);
        if (review[key] === testerName) {
          return review;
        }
    }
  }
    return;
  }
}

let tester1 = new Tester("Bob Jones");
let vehicle1 = new Vehicle("Toyota Prius", 2005, 23000);
let review1 = new Review(
  vehicle1,
  tester1,
  1,
  "Great car, excellent gas mileage!"
);

let tester2 = new Tester("Desiree Smith");
let vehicle2 = new Vehicle("Dodge Ram", 1985, 300);
let review2 = new Review(
  vehicle2,
  tester2,
  3,
  "Lots of rust, but still reliable."
);

let review3 = new Review(
  vehicle1,
  tester2,
  5,
  "Good ride, but wish it charged faster."
);
let review4 = new Review(
  vehicle2,
  tester1,
  5,
  "Best car I've ever driven!"
);

review1.addReview();
review2.addReview();
review3.addReview();
review4.addReview();

console.log("RESTER", tester1);
console.log("V  ", vehicle1);
console.log("R   ", review1);
console.log("F    ", vehicle1.findReviewByTester("Bob Jones"));
// console.log(filtered1);

module.exports = Vehicle;
