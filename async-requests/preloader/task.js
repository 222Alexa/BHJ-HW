'use strict ';

/*let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', true);
xhr.send();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		document.getElementById('loader').classList.remove('loader_active');
	};
	 const coin = JSON.parse(xhr.responseText);
	document.getElementById('items').innerHTML = '';
	getAnswer(coin.response.Valute);
	localStorage.setItem('currency', xhr.responseText);
});

function getAnswer(item) {
	for (let key in item) {
		document.getElementById('items').insertAdjacentHTML('beforeend', `
      <div class="item">
      <div class="item__code">
      ${item[key].CharCode}
      </div>
      <div class="item__value">
      ${item[key].Value}
      </div>
      <div class="item__currency">
      руб.
      </div>
      </div>
      `);
	}
}

window.addEventListener('load', () => {

	if (localStorage.getItem("currency")) {
		const lastCurrency = JSON.parse(localStorage.getItem('currency'));
		document.getElementById('loader').classList.remove('loader_active');
		getAnswer(lastCurrency);
	}
});
*/
window.addEventListener('load', () => {
//сюда данные из ЛС
request();
});
function request() {

	fetch('https://netology-slow-rest.herokuapp.com')
		.then(response => response.json())
		.then(obj => {
			template(obj.response.Valute);
			loader.classList.remove("loader_active");
		})
		.catch((error) => console.log('OOOops!'));

}

 /*Судя по всему, у меня проблема в принципе с композицией, если действий больше двух(
пытаюсь сделать так: собрать текст из существующей разметки(пару валюта:значение), запушить в ЛС. Асинхронно отправить запрос, пока он выполняется заполнить разметку данными из ЛС.
из всего плана только запрос работает. как делать все остальное?

Мне нужно каким-то образом вытащить объект obj.response.Valute в следующий then или во внешнюю функцию, выделить из него CharCode и Value и запушить в LocalStorage
1. Я не понимаю как это проделать именно с then. Насколько я поняла, then обрабатывает только что-то одно и только один раз(то есть если obj отработал, то все).Ну и с внешней функцией он работать не будет, асинхронный же;
2. Я не понимаю как деструктурировать многовложенный объект. то есть сам принцип деструктуризации понятен, и перебор ключей тоже понятен. примерно
let big = {
	1: {
		foo: 'foo',
		bar: 'bar'
	},
	2: {
		foo: 'foo',
		bar: 'bar',
		pop: 'pop',
		urt: 'urt'
	},
	3: {
		foo: 'foo',
		bar: 'bar',
		pop: 'pop',
		urt: 'urt'
	},
	4: {
		foo: 'foo',
		bar: 'bar',
		pop: 'pop',
		urt: 'urt'
	},

}
const {
	foo,
	urt,
	...small
} = big; // small = остатки от big, если он будет одномерным

и стопор если Object.entries(big) =>... совместить с деструктуризацией.

*/

function template(item) {
	for (let key in item) {
		document.getElementById('items').insertAdjacentHTML('beforeend', `
      <div class="item">
      <div class="item__code">
      ${item[key].CharCode}
      </div>
      <div class="item__value">
      ${item[key].Value}
      </div>
      <div class="item__currency">
      руб.
      </div>
      </div>
      `);

	}
}



function loadedCurrency(){

}

function setStorage(itemsTask) {

	return localStorage.setItem('items', JSON.stringify(currency));
}

function getStorage() {
	let currencyList = localStorage.getItem('currency');
	currencyList = currencyList ? JSON.parse(currencyList) : [];

	return currencyList;
}




