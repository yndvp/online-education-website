'use strict';

///////////////////////////////////////
// Variables
const menuLinksBox = document.querySelector('header .menu');
const menuLinks = document.querySelectorAll('header .menu li');
const header = document.querySelector('header');
const sliderSec = document.querySelector('.slider');
const openBtn = document.querySelector('header .openBtn');
const closeBtn = document.querySelector('header .closeBtn');
const body = document.querySelector('body');
const shadeContainer = document.querySelector('.shade-container');
const mainMenu = document.querySelector('header .flex-container');

///////////////////////////////////////
// Sticky navigation
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) header.classList.add('sticky');
  else header.classList.remove('sticky');
};

const topObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${headerHeight}px`,
});
topObserver.observe(sliderSec);

///////////////////////////////////////
// Toggle menu

// Open menu function
const openMenu = function (e) {
  e.preventDefault();

  openBtn.classList.add('hidden');
  mainMenu.classList.add('active');
  closeBtn.classList.add('active');
  shadeContainer.classList.add('shade');
  header.classList.remove('sticky');
};
// Close menu function
const closeMenu = function (e) {
  e.preventDefault();

  openBtn.classList.remove('hidden');
  mainMenu.classList.remove('active');
  closeBtn.classList.remove('active');
  shadeContainer.classList.remove('shade');
  header.classList.add('sticky');
};
// Add event handler
openBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
mainMenu.addEventListener('click', closeMenu);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeMenu();
  }
});

///////////////////////////////////////
// Page navigation
menuLinksBox.addEventListener('click', function (e) {
  e.preventDefault();

  if (e.target.classList.contains('nav-link')) {
    console.log(e.target);
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
    });
  }
});

///////////////////////////////////////
// Day counter
const countdown = function () {
  const countDate = new Date('January 30, 2021 00:00:00').getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const countDay = Math.floor(gap / day);
  const countHour = Math.floor((gap % day) / hour);
  const countMinute = Math.floor((gap % hour) / minute);
  const countSecond = Math.floor((gap % minute) / second);

  document.querySelector('.days').innerHTML = countDay;
  document.querySelector('.hours').innerHTML = countHour;
  document.querySelector('.minutes').innerHTML = countMinute;
  document.querySelector('.seconds').innerHTML = countSecond;
};
setInterval(countdown, 1000);

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

///////////////////////////////////////
// Revealing sections on scroll
const revealOnScroll = function () {
  const allSections = document.querySelectorAll('section');

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target);
  };

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
  });

  allSections.forEach((sec) => {
    sectionObserver.observe(sec);
    sec.classList.add('section--hidden');
  });
};
revealOnScroll();
