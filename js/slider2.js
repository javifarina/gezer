const slides = document.querySelectorAll(".slides img");
const dots = document.querySelectorAll(".dot");
let currentSlide = 0;
let slideInterval = setInterval(nextSlide, 2000);

function nextSlide() {
  slides[currentSlide].classList.remove("active");
  dots[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
  dots[currentSlide].classList.add("active");
}

function pauseSlide() {
  clearInterval(slideInterval);
}

function playSlide() {
  slideInterval = setInterval(nextSlide, 2000);
}

const slider = document.querySelector(".slider");
slider.addEventListener("mouseenter", pauseSlide);
slider.addEventListener("mouseleave", playSlide);
