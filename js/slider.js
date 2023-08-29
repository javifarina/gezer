
const slides = document.querySelectorAll(".slide");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const indicators = document.querySelectorAll(".indicator");

let currentSlide = 0;
let intervalId;

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function updateIndicators(index) {
  indicators.forEach((indicator, i) => {
    if (i === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}


prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
    updateIndicators(currentSlide);
  });
});

function startAutoSlide() {
  intervalId = setInterval(() => {
    nextSlide();
  }, 6000); // Change slide every 3 seconds
}

function stopAutoSlide() {
  clearInterval(intervalId);
}

startAutoSlide();

showSlide(currentSlide);
