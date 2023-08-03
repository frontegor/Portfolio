document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".basis__swiper", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    speed: 500,
    autoplay: true,
  });

  const swiper2 = new Swiper(".port__swiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    direction: "horizontal",
    autoplay: true,
    loop: true,
    pagination: {
      el: ".port__swiper-pagination ",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 0,
    },
    navigation: {
      nextEl: ".port__swiper-button-next",
      prevEl: ".port__swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      601: {
        slidesPerView: 2,
        spaceBetweenL: 10,
      },
      1025: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });

  const swiper3 = new Swiper(".order__swiper", {
    slidesPerView: 1,
    direction: "horizontal",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 1500,
      disableOnInteraction: true,
    },
  });

  const swiper4 = new Swiper(".contacts__swiper", {
    direction: "horizontal",
    loop: true,
    speed: 1000,
    autoplay: true,
  });

  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".header__nav");
  var line1 = document.querySelector(".line1");
  var line2 = document.querySelector(".line2");
  var line3 = document.querySelector(".line3");
  var btn = document.querySelector(".header__tel-btn");

  burger.addEventListener("click", function () {
    burger.classList.toggle("burger-fixed");
    nav.classList.toggle("header__nav-active");
    line1.classList.toggle("line1-active");
    line2.classList.toggle("line2-active");
    line3.classList.toggle("line3-active");
    btn.classList.toggle("header__tel-btn-active");
  });

  let headerBtnSvg = document.querySelector(".header__btn-svg");
  let headerItemMenu = document.querySelector(".header__item-menu");

  headerBtnSvg.addEventListener("click", function () {
    headerItemMenu.classList.toggle("menu-active");
  });

  let phone = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999) 999-99-99");
  im.mask(phone);
  new window.JustValidate(".order__form", {
    colorWrong: "#D11616",
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10,
      },
      phone: {
        required: true,
        function: (name, value) => {
          const ph = phone.inputmask.unmaskedvalue();
          return Number(ph) && ph.length === 10;
        },
      },
    },
  });
});

let container__timing = document.querySelector(".container__timing");
let mediaQuery = window.matchMedia("(max-width: 1200px)");

if (mediaQuery.matches) {
  container__timing.classList.add("container");
} else {
  container__timing.classList.remove("container");
}
