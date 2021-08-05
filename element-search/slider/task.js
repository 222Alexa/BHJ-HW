'use strict';

const prewBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');
const sliderItems = document.querySelectorAll('.slider__item');
const sliderDots = (document.querySelectorAll('.slider__dot'));
let count = 0;

prewBtn.onclick = function () {
	changeActive();
	count--;
	if (count < 0) {
		count = sliderItems.length - 1;
	}
	changeActive();
}
nextBtn.onclick = function () {
	changeActive();
	count++;
	if (count >= sliderItems.length) {
		count = 0;
	}
	changeActive();
}
for (let i = 0; i < sliderDots.length; i++) {
	sliderDots[i].onclick = function () {
		changeActive();
		count = i;
		changeActive();
	}
}

function changeActive() {

	if (sliderItems[count].classList.contains('slider__item_active')) {
		sliderItems[count].classList.remove('slider__item_active');
		sliderDots[count].classList.remove('slider__dot_active');
	} else {
		sliderItems[count].classList.add('slider__item_active');
		sliderDots[count].classList.add('slider__dot_active');
	}
}
