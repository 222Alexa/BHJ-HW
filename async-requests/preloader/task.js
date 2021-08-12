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




