const swiper = new Swiper('.basis__swiper', {
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    speed: 500,
    autoplay: true,

});



const swiper2 = new Swiper('.port__swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    pagination: {
        el: '.port__swiper-pagination ',
        clickable: true,
    },
    navigation: {
        nextEl: '.port__swiper-button-next',
        prevEl: '.port__swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        601: {
            slidesPerView: 2,
            spaceBetweenL: 30,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

    }
});



const swiper3 = new Swiper('.order__swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: true,
});

const swiper4 = new Swiper('.contacts__swiper', {
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    autoplay: true,
});




const swiper5 = new Swiper('.blog__swiper', {
    slidesPerView: 3,
    spaceBetween: 50,
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    pagination: {
        el: '.blog__swiper-pagination ',
        clickable: true,
    },
    navigation: {
        nextEl: '.blog__swiper-button-next',
        prevEl: '.blog__swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        601: {
            slidesPerView: 2,
            spaceBetweenL: 30,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 50,
        }
    }
});


var burger = document.querySelector('.burger');
var nav = document.querySelector('.header__nav');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');
var btn = document.querySelector('.header__tel-btn');

burger.addEventListener('click', function() {
    burger.classList.toggle('burger-fixed');
    nav.classList.toggle('header__nav-active');
    line1.classList.toggle('line1-active');
    line2.classList.toggle('line2-active');
    line3.classList.toggle('line3-active');
    btn.classList.toggle('header__tel-btn-active');
})


let phone = document.querySelector("input[type='tel']")
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(phone);
new window.JustValidate('.order__form', {
    colorWrong: '#D11616',
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
            }
        },
    },
});