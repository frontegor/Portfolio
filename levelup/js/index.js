const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');

burger.addEventListener('click', function () {
    burger.classList.toggle('burger-active');
    headerNav.classList.toggle('header__nav-active');
    line1.classList.toggle('line1-active')
    line2.classList.toggle('line2-active')
    line3.classList.toggle('line3-active')
})


const mediaQuery = window.matchMedia('(min-width: 1200px)')
let headerLink = document.querySelectorAll('.header__link');

if (mediaQuery) {
    headerLink.forEach(function (e) {
        e.addEventListener('click', function () {
            headerNav.classList.remove('header__nav-active')
            line1.classList.remove('line1-active')
            line2.classList.remove('line2-active')
            line3.classList.remove('line3-active')
        })
    })
}

const swiper1 = new Swiper('.comment__swiper', {
    slidesPerView: 1,
    direction: 'horizontal',
    autoplay: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination ',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //     },
    //     601: {
    //         slidesPerView: 2,
    //         spaceBetweenL: 10,
    //     },
    //     769: {
    //         slidesPerView: 3,
    //         spaceBetween: 10,
    //     },

    // }
});



const swiper2 = new Swiper('.sale__swiper', {
    slidesPerView: 4,
    direction: 'horizontal',
    autoplay: {
        delay: 1,
        disableOnInteraction: true,
    },
    loop: true,
    speed: 10000,
    freeMode: true,
    spaceBetween: 100,
});




function replacer(el) {
    el.value = el.value.replace(/[^0-9+]/g, '');
}


// const now = new Date();
// const
//     dBox = document.getElementById('days'),
//     hBox = document.getElementById('hour'),
//     mBox = document.getElementById('minutes'),
//     sBox = document.getElementById('seconds');

// let times = [
//     01 - now.getDay(),
//     45 - now.getHours(),
//     58 - now.getMinutes(),
//     59 - now.getSeconds(),
// ];



// const timer = times => {
//     let tm = setInterval(() => {

//         times[3]--;

//         if (times[0] == 0 && times[1] == 0 && times[2] == 0 && times[3] == 0) {
//             clearInterval(tm);


//         } else if (times[3] == -1) {
//             times[3] = 59;
//             times[2]--;
//         } else if (times[2] == -1) {
//             times[2] = 59;
//             times[1]--;
//         }

//         let
//             d = (times[0] < 10) ? '0' + times[0] : times[0],
//             h = (times[1] < 10) ? '0' + times[1] : times[1],
//             m = (times[2] < 10) ? '0' + times[2] : times[2],
//             s = (times[3] < 10) ? '0' + times[3] : times[3];

//         showTimer(d, h, m, s);
//     }, 1000);
// }
// const showTimer = (day, hour, min, sec) => {
//     dBox.innerHTML = day;
//     hBox.innerHTML = hour;
//     mBox.innerHTML = min;
//     sBox.innerHTML = sec;
// }

// timer(times);


const now = new Date();
const
    dBox = document.getElementById('days'),
    hBox = document.getElementById('hour'),
    mBox = document.getElementById('minutes'),
    sBox = document.getElementById('seconds');

const times = [
    dBox.innerHTML = '0',
    hBox.innerHTML = '0',
    mBox.innerHTML = '30',
    sBox.innerHTML = '0'
]


const timer = times => {
    let tm = setInterval(() => {

        times[3]--;

        if (times[0] == 0 && times[1] == 0 && times[2] == 0 && times[3] == 0) {
            clearInterval(tm);


        } else if (times[3] == -1) {
            times[3] = 59;
            times[2]--;
        } else if (times[2] == -1) {
            times[2] = 59;
            times[1]--;
        }

        let
            d = (times[0] < 10) ? '0' + times[0] : times[0],
            h = (times[1] < 10) ? '0' + times[1] : times[1],
            m = (times[2] < 10) ? '0' + times[2] : times[2],
            s = (times[3] < 10) ? '0' + times[3] : times[3];

        showTimer(d, h, m, s);
    }, 1000);
}
const showTimer = (day, hour, min, sec) => {
    dBox.innerHTML = day;
    hBox.innerHTML = hour;
    mBox.innerHTML = min;
    sBox.innerHTML = sec;
}

timer(times);




const saleAlert = document.querySelector('.sale__alert');
const SaleSubmit = document.querySelector('.sale__btn');
const body = document.querySelector('.body');
const basis = document.querySelector('.basis');
const component = document.querySelector('.component');
const comment = document.querySelector('.comment');
const doc = document.querySelector('.doc');
const sale = document.querySelector('.sale');
const footer = document.querySelector('.footer');
const closeAlert = document.querySelector('.close');

SaleSubmit.addEventListener('click', function () {
    saleAlert.classList.add('sale__alert-active');
    body.classList.add('body-bg')
    basis.classList.add('basis-bg')
    component.classList.add('component-bg')
    comment.classList.add('comment-bg')
    doc.classList.add('doc-bg')
    sale.classList.add('sale-bg')
    footer.classList.add('footer-bg')
})


closeAlert.addEventListener('click', function () {
    saleAlert.classList.remove('sale__alert-active');
    body.classList.remove('body-bg')
    basis.classList.remove('basis-bg')
    component.classList.remove('component-bg')
    comment.classList.remove('comment-bg')
    doc.classList.remove('doc-bg')
    sale.classList.remove('sale-bg')
    footer.classList.remove('footer-bg')
})






