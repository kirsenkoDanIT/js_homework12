"use strict";

// const images = document.querySelectorAll(".image-to-show");
// const stop = document.getElementById("stop");
// const start = document.getElementById("start");

// start.style.display = "none";
// console.log(images);

// images.forEach(item => {
//   item.style.display = "none";
// });
// let currentSlide = 0;
// images[currentSlide].style.display = "block";

// const clearCarouselInterval = () => {
//   clearInterval(carouselInterval);
//   carouselInterval = setInterval(nextCarousel, 1000);
//   start.style.display = "none";
// };

// const nextCarousel = () => {
//   images[currentSlide].style.display = "none";
//   currentSlide = (currentSlide + 1) % images.length;
//   images[currentSlide].style.display = "block";
// };

// let carouselInterval = setInterval(nextCarousel, 1000);

// stop.addEventListener("click", () => {
//   clearInterval(carouselInterval);
//   start.style.display = "";
// });

// start.addEventListener("click", clearCarouselInterval);

function Slider(imgContainerClass) {
  this.images = document.querySelectorAll(imgContainerClass);
  this.stop = document.getElementById("stop");
  this.start = document.getElementById("start");

  this.start.style.display = "none";

  this.images.forEach(item => {
    item.style.display = "none";
  });
  this.currentSlide = 0;
  this.images[this.currentSlide].style.display = "block";

  this.clearCarouselInterval = () => {
    clearInterval(this.carouselInterval);
    this.carouselInterval = setInterval(this.nextCarousel, 1000);
    this.start.style.display = "none";
  };

  this.nextCarousel = () => {
    this.images[this.currentSlide].style.display = "none";
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.images[this.currentSlide].style.display = "block";
  };

  this.carouselInterval = setInterval(this.nextCarousel, 1000);

  this.stop.addEventListener("click", () => {
    clearInterval(this.carouselInterval);
    this.start.style.display = "";
  });

  this.start.addEventListener("click", this.clearCarouselInterval);
}

const xxx = new Slider(".image-to-show");

console.log(xxx);
