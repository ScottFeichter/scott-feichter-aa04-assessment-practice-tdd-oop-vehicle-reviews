const Vehicle = require("./vehicle.js");
// const Bicycle = require("./bicycle.js");
// const ElectricBicycle = require("./electric-bicycle.js");
const Tester = require("./tester.js");

class Review {
  constructor(vehicle, tester, starRating, text) {
    this.vehicle = vehicle;
    this.tester = tester;
    this.starRating = starRating;
    this.text = text;
  }
  addReview() {
    this.vehicle.reviews.push(this);
    this.tester.reviews.push(this);
  }

  static filterByStars(starFilter, ...reviews) {
    let filteredReviews = [];
    for (let review of reviews) {
      if (review.starRating === starFilter) {
        filteredReviews.push(review);
      }
    }
    return filteredReviews;
  }
}


module.exports = Review;
