'use strict';

const formAuth = document.getElementById('signin__form');
const form = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const btnExit = document.getElementById('btn__exit');

/*window.addEventListener('DOMContentLoaded', () => {
	if (localStorage.userId) {

		userId.textContent = localStorage.userId;
		toggle();

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
	toggle();

});


function shippingRequest() {
	const xhr = new XMLHttpRequest();
	const formData = new FormData(formAuth);
	xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === xhr.DONE && xhr.status === 200) {
			const data = JSON.parse(xhr.responseText);

			if (data.success) {

				showWelcom(data.user_id)

			} else {
				alert('Неверный логин/пароль');
				formAuth.reset();
			}
		}
	});
	xhr.send(formData);
}
*/

const toggle = function () {
	welcome.classList.toggle('welcome_active');
	form.classList.toggle('signin_active');
	form.classList.contains('signin_active') ? btnExit.style.display = 'none' : btnExit.style.display = 'block';

}

const showWelcom = function (id) {
	localStorage.userId = id;
	userId.textContent = localStorage.userId; //задает id в блок приветствие
	form.classList.remove('signin_active');
	welcome.classList.add('welcome_active');
	btnExit.style.display = 'block';

}


const ajaxSend = async () => {

	try {
		const fetchResp = await fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
			method: 'POST',
			body: new FormData(formAuth),
		});

		if (!fetchResp.ok) {
			throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
		}
		const response = await fetchResp.json();
		
		if (response.success) {

			showWelcom(response.user_id)

		} else {

			alert('Неверный логин/пароль');
			formAuth.reset();
		}

		return response;
	}

	catch (err) {

		console.log(err)
	}
};

formAuth.addEventListener('submit', async (e) => {
	e.preventDefault();
	await ajaxSend();
	
});

btnExit.addEventListener('click', () => {
	localStorage.removeItem('userId');
	formAuth.reset();
toggle();

});

window.addEventListener('DOMContentLoaded', () => {
	if (localStorage.userId) {

		userId.textContent = localStorage.userId;
		toggle();

	} else {

		form.classList.add('signin_active');

	}
});


