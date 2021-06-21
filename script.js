// Home slider variables
const navigators = document.querySelectorAll(".navigation-btn");
const navigator1 = document.querySelector(".navigation-btn.btn1");
const navigator2 = document.querySelector(".navigation-btn.btn2");
const navigator3 = document.querySelector(".navigation-btn.btn3");
const firstSlide = document.querySelector(".slide1");

// Remove active class
const removeActive = function () {
  navigators.forEach(function (el) {
    el.classList.remove("active");
  });
};

// Slider manual player
navigator1.addEventListener("click", function () {
  firstSlide.style.marginTop = "0";
});
navigator2.addEventListener("click", function () {
  firstSlide.style.marginTop = "-630px";
});
navigator3.addEventListener("click", function () {
  firstSlide.style.marginTop = "-1260px";
});

// Slider auto player
setInterval(function () {
  if (firstSlide.style.marginTop === "0px") {
    firstSlide.style.marginTop = "-630px";
    removeActive();
    navigators[1].classList.add("active");
  } else if (firstSlide.style.marginTop === "-630px") {
    firstSlide.style.marginTop = "-1260px";
    removeActive();
    navigators[2].classList.add("active");
  } else {
    firstSlide.style.marginTop = "0px";
    removeActive();
    navigators[0].classList.add("active");
  }
}, 5000);

// Activate slider navigators
navigators.forEach(function (navigator) {
  navigator.addEventListener("click", function () {
    removeActive();
    navigator.classList.add("active");
  });
});
