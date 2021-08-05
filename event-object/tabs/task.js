'use strict';

const tabsArray = Array.from(document.getElementsByClassName('tab'));
const tabContentArray = Array.from(document.getElementsByClassName('tab__content'));

tabsArray.forEach(element => element.addEventListener('click', tabClick));


function tabClick(event) {
	removeActive(tabsArray, 'tab_active');
	removeActive(tabContentArray, 'tab__content_active');
	event.currentTarget.classList.add('tab_active');
	tabContentArray[tabsArray.indexOf(event.currentTarget)].classList.add('tab__content_active');
}

function removeActive(element, className) {
	element.forEach((e) => e.classList.remove(className));
}
