'use strict';
const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();
    let progress = document.getElementById('progress');
    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.upload.addEventListener('progress', event => progress.value = event.loaded / event.total);
    xhr.send(formData);
    event.preventDefault();
});


document.addEventListener('DOMContentLoaded', () => {

	/*
	поняла, что у fetch  нет способа контролировать загрузку, т е они либо получены либо нет.поэтому лоадер здесь не прикрутить(. зато форма отправляется)
	
	const ajaxSend = async (formData) => {
		const fetchResp = await fetch('https://netology-slow-rest.herokuapp.com/upload.php', {
			method: 'POST',
			body: formData
		});

		if (!fetchResp.ok) {
			throw new Error(`Ошибка по адресу ${url}, статус ошибки ${fetchResp.status}`);
		}
		return await fetchResp.text();
	};

	const form = document.getElementById('form');

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const formData = new FormData(this);

		ajaxSend(formData)
			.then((response) => {

				form.reset(); // очищаем поля формы 
			})
			.catch((err) => console.error(err))
	});
});

*/