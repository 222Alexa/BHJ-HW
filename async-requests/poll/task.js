'use strict';

const title = document.querySelector('#poll__title');
const answers = document.querySelector('#poll__answers');

const xhr = new XMLHttpRequest();
const xhrPost = new XMLHttpRequest()

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE && xhr.status == 200) {
		const ansXhr = JSON.parse(xhr.responseText);
		title.dataset.id = ansXhr.id;
		
		for (let key in ansXhr.data.answers) {
			answers.insertAdjacentHTML('beforeend', ` <button class="poll__answer">
              ${ansXhr.data.answers[key]}
            </button>`
			);

		}
	}
})

document.querySelector('.poll').addEventListener('click', (e) => {
if(e.target.classList.contains('poll__answer')){
alert('Спасибо, ваш голос засчитан!')
					xhrPost.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
					xhrPost.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
					xhrPost.send(`vote=${title.dataset.id}&answer=${e.target.id}`)
}

});

xhrPost.addEventListener('readystatechange', () =>{
	if (xhrPost.readyState === xhr.DONE && xhr.status == 200) {

		const ansXhr = JSON.parse(xhrPost.responseText);
		answers.innerHTML = '';
		const votesAll = Object.values(ansXhr.stat).reduce((sum, item) => sum + item.votes, 0);
		for (let result in ansXhr.stat) {
			answers.innerHTML += `<div>${ansXhr.stat[result].answer}: <b>${(ansXhr.stat[result].votes / votesAll * 100).toFixed(2)}%</b></div>`;
		}
	}
});













/*const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE && xhr.status == 200) {

		const ansXhr = JSON.parse(xhr.responseText);

		poll.textContent = ansXhr.data.title;

		for (let key in ansXhr.data.answers) {
			answers.insertAdjacentHTML('beforeend', ` <button class="poll__answer">
			  ${ansXhr.data.answers[key]}
			</button>`);

		}
		//alert('Спасибо, Ваш голос засчитан!')
		for (let answer in ansXhr.data.answers) {


			document.addEventListener('click', () => {

				// отображение результатов
				const xhr = new XMLHttpRequest();
				xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
				xhr.send(`vote=${ansXhr.id}&answer=${answer}`)

				xhr.addEventListener('readystatechange', () => {
					if (xhr.readyState === xhr.DONE && xhr.status == 200) {
						const resXhr = JSON.parse(xhr.responseText);

						const votesAll = Object.values(resXhr.stat).reduce((sum, item) => sum + item.votes, 0);

						answers.innerHTML = '';
						// убираем кнопки голосования
						for (let result in resXhr.stat) {
							answers.innerHTML += `<div>${resXhr.stat[result].answer}: <b>${(resXhr.stat[result].votes / votesAll * 100).toFixed(2)}%</b></div>`;
						}
					}

				});

			});

		}
	}
});

*/