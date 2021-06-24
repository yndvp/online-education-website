// Slider variables
const sliderNavs = document.querySelectorAll(".slider .navigation-btn");
const sliderNav1 = document.querySelector(".slider .navigation-btn.btn1");
const sliderNav2 = document.querySelector(".slider .navigation-btn.btn2");
const sliderNav3 = document.querySelector(".slider .navigation-btn.btn3");
const sliderFirst = document.querySelector(".slider .slide1");

// Remove active class
const removeActive = function () {
  sliderNavs.forEach(function (el) {
    el.classList.remove("active");
  });
};

// Slider manual player
sliderNav1.addEventListener("click", function () {
  sliderFirst.style.marginTop = "0";
});
sliderNav2.addEventListener("click", function () {
  sliderFirst.style.marginTop = "-630px";
});
sliderNav3.addEventListener("click", function () {
  sliderFirst.style.marginTop = "-1260px";
});

// Slider auto player
setInterval(function () {
  if (sliderFirst.style.marginTop === "0px") {
    sliderFirst.style.marginTop = "-630px";
    removeActive();
    sliderNavs[1].classList.add("active");
  } else if (sliderFirst.style.marginTop === "-630px") {
    sliderFirst.style.marginTop = "-1260px";
    removeActive();
    sliderNavs[2].classList.add("active");
  } else {
    sliderFirst.style.marginTop = "0px";
    removeActive();
    sliderNavs[0].classList.add("active");
  }
}, 5000);

// Activate slider navigators
sliderNavs.forEach(function (navigator) {
  navigator.addEventListener("click", function () {
    removeActive();
    navigator.classList.add("active");
  });
});

// Testimonials variables
const testimonialNavs = document.querySelectorAll(
  ".testimonials .navigation-btn"
);
const testimonialFirst = document.querySelector(".testimonials .first");

// Testimonials manual player
testimonialNavs[0].addEventListener("click", function () {
  testimonialFirst.style.marginLeft = "0%";
});
testimonialNavs[1].addEventListener("click", function () {
  testimonialFirst.style.marginLeft = "-33.33%";
});
testimonialNavs[2].addEventListener("click", function () {
  testimonialFirst.style.marginLeft = "-66.66%";
});

// Activate testimonials navigators
testimonialNavs.forEach(function (el) {
  el.addEventListener("click", function () {
    testimonialNavs.forEach(function (el2) {
      el2.classList.remove("active");
    });
    el.classList.add("active");
  });
});
