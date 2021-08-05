'use strict';

function clearActive(element) {
	Array.from(element.closest('.menu_main').querySelectorAll('.menu_active')).forEach(element => {
		element.classList.remove('menu_active');
	}); //найди в  menu_main элементы, содержащие menu_active. Найдешь - удали у них menu_active.
}
//nextElementSibling - находит следующий элемент в этом же родителе
//contains - проверяет наличие вложенного элемента

function clickMenu() {
	if (this.nextElementSibling.classList.contains('menu_sub')) {
		let menuActive = this.nextElementSibling.classList.contains('menu_active');
		clearActive(this);
		if (!menuActive) {
			this.nextElementSibling.classList.add('menu_active'); //
		}
	}
	return false; //запрет перехода по ссылке для вложенного меню
}

Array.from(document.querySelectorAll('.menu__link')).forEach(element => {
	element.onclick = clickMenu; // найди все элементы с селектором .menu__link и выполни для них function clickMenu();
});
