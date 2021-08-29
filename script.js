///////////////////////////////////////
// Variables
const toggleBtn = document.querySelector('header .toggleBtn');
const mainMenu = document.querySelector('header .flex-container');
const closeBtn = document.querySelector('header .closeBtn');

///////////////////////////////////////
// Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const navsContainer = document.querySelector('.slider .navigation');

  let curSlide = 0;
  let maxSlide = slides.length - 1;

  // Add background to slides
  slides.forEach((s, i) => {
    s.style.backgroundImage = `url('images/img_bg_${i + 1}.jpg')`;
    s.style.backgroundSize = 'cover';
  });

  // Functions
  const createNavs = function () {
    slides.forEach((_, i) => {
      navsContainer.insertAdjacentHTML(
        'beforeend',
        `<div class="navigation-btn" data-slide="${i}"></div>`
      );
    });
  };
  const activateNavs = function (slide) {
    document
      .querySelectorAll('.slider .navigation-btn')
      .forEach((btn) => btn.classList.remove('active'));
    document
      .querySelector(`.slider .navigation-btn[data-slide='${slide}']`)
      .classList.add('active');
  };
  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateY(${100 * (i - slide)}%)`;
    });
  };

  // Event handler
  navsContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('navigation-btn')) {
      const { slide } = e.target.dataset;
      curSlide = slide;
      activateNavs(curSlide);
      goToSlide(curSlide);
    }
  });

  // Auto player
  const autoPlay = setInterval(function () {
    if (curSlide >= maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    activateNavs(curSlide);
    goToSlide(curSlide);
  }, 3000);

  // Initialize
  const init = function () {
    createNavs();
    activateNavs(0);
    goToSlide(0);
  };
  init();
};

slider();

///////////////////////////////////////
// Testimonials
const testimonial = function () {
  const testimonials = document.querySelectorAll('.testimonial');
  const navsContainer = document.querySelector('.testimonials .navigation');

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
