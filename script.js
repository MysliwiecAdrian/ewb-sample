// ========== Slideshow ==========

// Grab slides
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

// Function to show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

// Function to move to next slide
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Auto advance every 5 seconds
setInterval(nextSlide, 5000);

// Show the first slide immediately
showSlide(currentSlide);


// ========== Mobile Nav Toggle ==========

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
