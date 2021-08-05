'use strict';

const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const speed = document.getElementById('speed');
let sumClick = 0;
let click = 0;

cookie.onclick = function () {
	sumClick++;
	counter.textContent++;
	if (sumClick % 2 == 0) {
		cookie.width = 200;
		click = (new Date().getTime());
	} else {
		cookie.width = 220;
		speed.textContent = (1000 / ((new Date()).getTime() - click)).toFixed(2);
	}
}
