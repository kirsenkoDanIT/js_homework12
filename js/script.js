"use strict";


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
    this.carouselInterval = setInterval(this.nextCarousel, 2000);
    this.start.style.display = "none";
  };

  this.nextCarousel = () => {
    this.images[this.currentSlide].style.display = "none";
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.images[this.currentSlide].style.display = "block";
  };

  this.carouselInterval = setInterval(this.nextCarousel, 2000);

  this.stop.addEventListener("click", () => {
    clearInterval(this.carouselInterval);
    this.start.style.display = "";
  });

  this.start.addEventListener("click", this.clearCarouselInterval);
}

const slider = new Slider(".image-to-show");