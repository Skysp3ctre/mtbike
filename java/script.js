$(document).ready(function () {
  $(".hamburger-menu").click(function () {
    $(".nav-links").slideToggle();
    $(".close-button").toggle(); // Toggle visibility of the close button
    $(this).toggle(); // Toggle visibility of the hamburger menu icon
    $(this).toggleClass("active");
    $(".nav-links li").toggleClass("active");
    $("#hamburger-menu").toggleClass("active");
  });

  // Close menu when close button is clicked
  $(".close-button").click(function () {
    $(".nav-links").slideUp();
    $(".close-button").hide(); // Hide the close button
    $(".hamburger-menu").show(); // Show the hamburger menu icon
    $(".hamburger-menu").toggleClass("active");
    $(".nav-links li").removeClass("active");
    $("#hamburger-menu").removeClass("active");
  });

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $(".nav-links").removeAttr("style");
      $(".close-button").hide(); // Hide the close button if the window is resized to a larger size
      $(".hamburger-menu").show(); // Show the hamburger menu icon if the window is resized to a larger size
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".flex-slider");
  const slides = slider.querySelectorAll("div");
  let currentSlide = 0;
  const totalSlides = slides.length;

  function nextSlide() {
    slides[currentSlide].style.display = "none";
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].style.display = "block";
  }

  // Hide all slides except the first one
  for (let i = 1; i < totalSlides; i++) {
    slides[i].style.display = "none";
  }

  setInterval(nextSlide, 2000); // Change slide every 1.5 seconds
});

// JavaScript code to handle navigation between reviews
const reviews = document.querySelectorAll(".review1");
let currentReviewIndex = 0;

// Function to show current review
function showReview(index) {
  reviews.forEach((review) => {
    review.style.display = "none";
  });
  reviews[index].style.display = "block";
}

// Show the initial review
showReview(currentReviewIndex);

// Event listener for next button
document.getElementById("nextBtn").addEventListener("click", function () {
  currentReviewIndex++;
  if (currentReviewIndex >= reviews.length) {
    currentReviewIndex = 0;
  }
  showReview(currentReviewIndex);
});

// Event listener for previous button
document.getElementById("prevBtn").addEventListener("click", function () {
  currentReviewIndex--;
  if (currentReviewIndex < 0) {
    currentReviewIndex = reviews.length - 1;
  }
  showReview(currentReviewIndex);
});

function changeColor(imageSrc, bikeId) {
  var bikeImage = document.getElementById(bikeId);
  bikeImage.src = imageSrc;
}

function changeColor(imageSrc, bikeId) {
  var bikeImage = document.getElementById(bikeId);
  bikeImage.src = imageSrc;
}
