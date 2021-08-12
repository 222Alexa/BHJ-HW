'use strict';

const form = document.getElementById('signin');
const formAuth = document.getElementById('signin__form');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const btnExit = document.getElementById('btn__exit');

window.addEventListener('DOMContentLoaded', () => {
	if (localStorage.userId) {
		welcome.classList.add('welcome_active');
		userId.textContent = localStorage.userId;
		form.classList.remove('signin_active');
		btnExit.style.display = 'block';
	} else {
		form.classList.add('signin_active');

	}
});

formAuth.addEventListener('submit', e => {
	e.preventDefault();
	shippingRequest();
});

btnExit.addEventListener('click', () => {
	localStorage.removeItem('userId');
	formAuth.reset();
	welcome.classList.remove('welcome_active');
	form.classList.add('signin_active');
	btnExit.style.display = 'none';
});

function shippingRequest() {
	const xhr = new XMLHttpRequest();
	const formData = new FormData(formAuth);
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === xhr.DONE && xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);
console.log(data)
			if (data.success) {
				localStorage.userId = data.user_id;
				userId.textContent = localStorage.userId; //задает id в блок приветствие
				form.classList.remove('signin_active');
				welcome.classList.add('welcome_active');
				btnExit.style.display = 'block';
			} else {
				alert('Неверный логин/пароль');
				formAuth.reset();
			}
		}
	});
	xhr.send(formData);
}


/*
Это я пытаюсь осваивать новые технологии...но при отправке формы все время получаю false.причем не в консоль Что чя делаю не так?

let signin = document.getElementById('signin__btn');
const formAuth = document.getElementById('signin__form');

signin.addEventListener('submit', async (e) => {
	e.preventDefault();
	await ajaxSend();
});

const ajaxSend = async () => {
try {
		const fetchResp = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
			method: 'POST',
			body: new FormData(formAuth),
		});

		if (!fetchResp.ok) {
			throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
		}
		response = await response.json();
		formAuth.reset();
		return response;
		}
		catch(err) {
console.log('ooops!')}
	};


*/










