'use strict ';

window.addEventListener('load', () => {

	getLoaderStorage();
	request()

});

async function request() {

	try {
		const fetchResp = await fetch('https://netology-slow-rest.herokuapp.com');

		if (!fetchResp.ok) {
			throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
		}
		const obj = await fetchResp.json();
		const lastCurrency = obj.response.Valute;
		
		document.querySelector('#items').innerHTML = '';
		getAnswer(lastCurrency);
		addCurrencyInStorage(lastCurrency);
		
	}

	catch (err) {

		console.log(err)
	}
};

	/*
	function request() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://netology-slow-rest.herokuapp.com', true);
	xhr.send();
	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === xhr.DONE && xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);
			const lastCurrency = data.response.Valute;
			document.querySelector('#items').innerHTML = '';
			getAnswer(lastCurrency);
			addCurrencyInStorage(lastCurrency);
			document.getElementById('loader').classList.remove('loader_active');

		};
	});
}*/




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

function addCurrencyInStorage(item) {

	let lastCurrency = getStorage();
	lastCurrency.push(item);

	setStorage(lastCurrency);
	console.log(lastCurrency)

}


function getStorage() {

	const lastCurrency = localStorage.getItem('lastCurrency');
	return lastCurrency ? JSON.parse(lastCurrency) : [];

}

function setStorage(item) {
	return localStorage.setItem('lastCurrency', JSON.stringify(item));
}

function getLoaderStorage() {

	const lastCurrency = getStorage();

	if (!lastCurrency) {
		return;
	}
	else {
		document.getElementById('loader').classList.remove('loader_active');
		let { [Object.keys(lastCurrency).pop()]: lastItem } = lastCurrency;
		getAnswer(lastItem);
		
	}

}



