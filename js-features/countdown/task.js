'use strict';

const timer = document.getElementById('timer');
let count = timer.textContent;
const countDown = function () {
	if (count === 0) {
		alert("Вы выиграли в конкурсе!");
		location = 'https://www.gifki.org/data/media/492/feyerverk-i-salyut-animatsionnaya-kartinka-0086.gif';
		clearInterval(timerId);
	} else {
		count--;
		timer.textContent = `00:00:${count >= 10 ? count : "0" + count}`;
	}
};
const timerId = setInterval(countDown, 1000);
