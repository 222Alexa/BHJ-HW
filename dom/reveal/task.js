'use strict';

const isInViewport = function () {
    const revealArr = Array.from(document.querySelectorAll('.reveal'));
    const viewportHeight = window.innerHeight;
    revealArr.forEach(element => {
        element.getBoundingClientRect().top < viewportHeight ? element.classList.add('reveal_active') : element.classList.remove('reveal_active');
    });
}

document.addEventListener('scroll', isInViewport);