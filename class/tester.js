const Vehicle = require("./vehicle.js");
const Review = require("./review.js");
// const Bicycle = require("./bicycle.js");
// const ElectricBicycle = require("./electric-bicycle.js");



class Tester {
  constructor(name, reviews = []) {
    this.name = name;
    this.reviews = reviews;
  }
  submitReview(vehicle, starRating, text) {
    if (vehicle.validate()) {
      let tester = this;
      const mySubmittedReview = new Review(vehicle, tester, starRating, text);
      mySubmittedReview.addReview();
      return mySubmittedReview;
    // } else if (vehicle instanceof Bicycle) {
    //   let tester = this;
    //   const mySubmittedReview = new Review(vehicle, tester, starRating, text);
    //   mySubmittedReview.addReview();
    //   this.bikeTester = true;
    //   return mySubmittedReview;
    // } else if (vehicle[range]) {
    //   let tester = this;
    //   const mySubmittedReview = new Review(vehicle, tester, starRating, text);
    //   mySubmittedReview.addReview();
    //   this.eBikeTester = true;
    //   return mySubmittedReview;
    }
    throw new Error("Cannot submit review for invalid vehicle.");
  }
}

module.exports = Tester;
