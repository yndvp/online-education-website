///////////////////////////////////////
// Variables
const sliderNavs = document.querySelectorAll('.slider .navigation-btn');
const sliderNav1 = document.querySelector('.slider .navigation-btn.btn1');
const sliderNav2 = document.querySelector('.slider .navigation-btn.btn2');
const sliderNav3 = document.querySelector('.slider .navigation-btn.btn3');
const sliderFirst = document.querySelector('.slider .slide1');
const toggleBtn = document.querySelector('header .toggleBtn');
const mainMenu = document.querySelector('header .flex-container');
const closeBtn = document.querySelector('header .closeBtn');

///////////////////////////////////////
// Slider
// Remove active class
const removeActive = function () {
  sliderNavs.forEach(function (el) {
    el.classList.remove('active');
  });
};

// Slider manual player
sliderNav1.addEventListener('click', function () {
  sliderFirst.style.marginTop = '0';
});
sliderNav2.addEventListener('click', function () {
  sliderFirst.style.marginTop = '-630px';
});
sliderNav3.addEventListener('click', function () {
  sliderFirst.style.marginTop = '-1260px';
});

// Slider auto player
setInterval(function () {
  if (sliderFirst.style.marginTop === '0px') {
    sliderFirst.style.marginTop = '-630px';
    removeActive();
    sliderNavs[1].classList.add('active');
  } else if (sliderFirst.style.marginTop === '-630px') {
    sliderFirst.style.marginTop = '-1260px';
    removeActive();
    sliderNavs[2].classList.add('active');
  } else {
    sliderFirst.style.marginTop = '0px';
    removeActive();
    sliderNavs[0].classList.add('active');
  }
}, 5000);

// Activate slider navigators
sliderNavs.forEach(function (navigator) {
  navigator.addEventListener('click', function () {
    removeActive();
    navigator.classList.add('active');
  });
});

///////////////////////////////////////
// Testimonials
const testimonial = function () {
  const testimonials = document.querySelectorAll('.testimonial');
  const navsContainer = document.querySelector('.testimonials .navigation');

  let curSlide = 0;

  // Functions
  const createNavs = function (slide) {
    testimonials.forEach((_, i) => {
      navsContainer.insertAdjacentHTML(
        'beforeend',
        `<div class="navigation-btn" data-slide="${i}"></div>`
      );
    });
  };

  const activateNavs = function (slide) {
    document
      .querySelectorAll('.testimonials .navigation-btn')
      .forEach((nav) => nav.classList.remove('active'));
    document
      .querySelector(`.testimonials .navigation-btn[data-slide="${slide}"]`)
      .classList.add('active');
  };

  const goToSlide = function (slide) {
    testimonials.forEach(
      (t, i) => (t.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Event handler
  navsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('navigation-btn')) {
      const { slide } = e.target.dataset;
      activateNavs(slide);
      goToSlide(slide);
      curSlide = slide;
    }
  });

  const init = function () {
    createNavs();
    activateNavs(0);
    goToSlide(0);
  };
  init();
};

testimonial();

// Scrolling Variables
const coursesMenu = document.querySelector('#courses');
const blogMenu = document.querySelector('#blog');
const pricingMenu = document.querySelector('#pricing');
const coursesSec = document.querySelector('.courses');
const blogSec = document.querySelector('.blog-events');
const pricingSec = document.querySelector('.plans');

coursesMenu.addEventListener('click', function (e) {
  e.preventDefault();
  coursesSec.scrollIntoView({ behavior: 'smooth' });
});
blogMenu.addEventListener('click', function (e) {
  e.preventDefault();
  blogSec.scrollIntoView({ behavior: 'smooth' });
});
pricingMenu.addEventListener('click', function (e) {
  e.preventDefault();
  pricingSec.scrollIntoView({ behavior: 'smooth' });
});

// Toggle header menu
toggleBtn.addEventListener('click', function () {
  toggleBtn.classList.add('hidden');
  mainMenu.classList.add('active');
});
closeBtn.addEventListener('click', function () {
  toggleBtn.classList.remove('hidden');
  mainMenu.classList.remove('active');
});
