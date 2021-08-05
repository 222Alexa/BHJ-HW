'use strict';

const deadMole = document.getElementById('dead');
const lostMole = document.getElementById('lost');

function getHole(index) {
	return document.getElementById(`hole${index}`);
}

function clean() {
	lostMole.textContent = 0;
	deadMole.textContent = 0;
}
for (let index = 1; index < 10; index++) {
	const hole = getHole(index);
	hole.onclick = function () {
		if (getHole(index).classList.contains('hole_has-mole')) {
			deadMole.textContent++;
		} else {
			lostMole.textContent++
		}
		if (deadMole.textContent == 10) { // при такой реализации счетчик считает 10 попаданий или 5 промахов, но выводит на 1 меньше, т.е. последний клик не показывает. И я не понимаю, что сделать, чтобы отображалось 5 промахов или 10 попаданий, а не alert (ну, кроме того, чтобы изменить значения на 11 и 6 =)
			clean();
			alert('Кроты повержены, Вы выиграли!');
		} else if (lostMole.textContent == 5) {
			clean();
			alert('Кроты сильнее, Вы проиграли!');
		}
	}
}
