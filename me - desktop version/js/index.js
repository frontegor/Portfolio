const logo = document.querySelector('.contacts__hero');
setTimeout(() => {
    gsap.fromTo(logo, {
        duration: 2,
        scale: 3,
    }, {
        duration: 4,
        scale: 1,
        x: 0,
        y: 0

    })
}, 3000)
// 
// 
// 
// 
// 
// 
// 
// 
// 
const humanColumn = document.querySelector('.human__column');
setTimeout(() => {
    gsap.fromTo(humanColumn, {
        duration: 2,
        opacity: 0,
        x: 100
    }, {
        duration: 2,
        x: 0,
        opacity: 1
    })
}, 6000)
// 
// 
// 
// 
// 
// 
// 
// 
// 
const start = document.querySelector('.start');
const end = document.querySelector('.end');
setTimeout(() => {
    start.classList.add('start-active')
}, 3000)
setTimeout(() => {
    end.classList.add('end-active')
}, 7000)
setTimeout(() => {
    start.classList.add('animation-unset')
    end.classList.add('animation-unset')
}, 12000);
// 
// 
// 
// 
// 
// 
// 
// 
// 
const mytimeColumn = document.querySelector('.mytime__column');
setTimeout(() => {
    mytimeColumn.classList.add('mytime__column-active');
}, 9000)

const contactsColumn = document.querySelector('.contacts__column');
setTimeout(() => {
    contactsColumn.classList.add('contacts__column-active');
}, 10000)
// 
// 
// 
// 
// 
// 
// 
// 
// 
const start1 = document.querySelector('.start1');
const end1 = document.querySelector('.end1');
const center = document.querySelector('.center');

setTimeout(() => {
    start1.classList.add('start1-active');
}, 11000);

setTimeout(() => {
    center.classList.add('center-active');
}, 13000);

setTimeout(() => {
    end1.classList.add('end1-active');
}, 15000);

setTimeout(() => {
    start1.classList.add('animation-unset');
    end1.classList.add('animation-unset');
    center.classList.add('animation-unset');
}, 18000);