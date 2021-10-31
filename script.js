'use strict';

const mainMenu = document.querySelector('header .flex-container');

///////////////////////////////////////
// Toggle menu
const toggleMenu = function () {
  const openBtn = document.querySelector('header .openBtn');
  const closeBtn = document.querySelector('header .closeBtn');
  const body = document.querySelector('body');
  const shadeContainer = document.querySelector('.shade-container');

  openBtn.addEventListener('click', function () {
    openBtn.classList.add('hidden');
    mainMenu.classList.add('active');
    body.classList.add('freeze');
    shadeContainer.classList.add('shade');
  });
  closeBtn.addEventListener('click', function () {
    openBtn.classList.remove('hidden');
    mainMenu.classList.remove('active');
    body.classList.remove('freeze');
    shadeContainer.classList.remove('shade');
  });
};
toggleMenu();

///////////////////////////////////////
// Page navigation
const navigatePage = function () {
  mainMenu.addEventListener('click', function (e) {
    e.preventDefault();

    if (e.target.classList.contains('nav-link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
};
navigatePage();

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
