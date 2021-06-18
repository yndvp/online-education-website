// Home slider variables
const navigators = document.querySelectorAll(".navigation-btn");
const navigator1 = document.querySelector(".navigation-btn.btn1");
const navigator2 = document.querySelector(".navigation-btn.btn2");
const navigator3 = document.querySelector(".navigation-btn.btn3");
const firstSlide = document.querySelector(".slide1");

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
  } else if (firstSlide.style.marginTop === "-630px") {
    firstSlide.style.marginTop = "-1260px";
  } else {
    firstSlide.style.marginTop = "0px";
  }
}, 5000);

// Activate slider navigators
navigators.forEach(function (navigator) {
  navigator.addEventListener("click", function () {
    navigators.forEach(function (el) {
      el.classList.remove("active");
    });
    navigator.classList.add("active");
  });
});
