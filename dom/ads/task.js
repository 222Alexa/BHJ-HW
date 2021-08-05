'use strict';

const rotatorCase = Array.from(document.querySelectorAll('.rotator__case'));
let delay = 1000;
let count = 0;

function toggleClass() {
	rotatorCase.forEach((element) => element.classList.remove('rotator__case_active'));
	rotatorCase[count].classList.add('rotator__case_active');
	count = rotatorCase[count].nextElementSibling ? count + 1 : 0;
	delay = rotatorCase[count].getAttribute('data-speed');
	let color = rotatorCase[count].getAttribute('data-color');
	rotatorCase[count].setAttribute('style', `color: ${color}`);
	setTimeout(toggleClass, delay);
}

setTimeout(toggleClass, delay);
