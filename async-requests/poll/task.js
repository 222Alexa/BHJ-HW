'use strict';


/*const title = document.querySelector('#poll__title');
const answers = document.querySelector('#poll__answers');


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php', true);
xhr.send();

xhr.addEventListener('readystatechange', () => {
	if (xhr.readyState === xhr.DONE && xhr.status === 200) {
		const response = JSON.parse(xhr.responseText);
		title.textContent = response.data.title;
		for (let key in response.data.answers) {
			answers.insertAdjacentHTML('beforeend', ` <button class="poll__answer">
              ${response.data.answers[key]}
            </button>`);
			console.log(response.data.answers[key]);
		}
	};
});

document.getElementById('poll__answers').addEventListener('click', (event) => {
	if (event.target.classList.contains('poll__answer')) {
		alert('спасибо, Ваш голос засчитан!');

		const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(`vote=${title.dataset.id}&answer=${event.target.id}`);

		xhr.onreadystatechange = function () {//этот код правильно считает, но не меняет заголовок
			if (xhr.readyState === xhr.DONE && xhr.status === 200) {
				answers.innerHTML = "";
				const response = JSON.parse(xhr.responseText);
				const pollAnswers = response.stat;
				let votesAll = 0;
				pollAnswers.forEach(answer => {
					votesAll += answer.votes;
				});
				pollAnswers.forEach(answer => {
					answers.insertAdjacentHTML("beforeEnd",
						`<div class="poll__answer">
                  ${answer.answer}: <b>${(100 * answer.votes / votesAll).toFixed(2)}%</b>
                </div>
                `)
				});
				
				xhr.send(`vote=${response.id}&answer=${target.textContent}`);

			}

		}
		
	}
})






*/



//и всегда включается пауза дебаггера и  WebSocket connection to 'ws://localhost:8125/' failed: Error in connection establishment: net::ERR_CONNECTION_REFUSED
//createWebSocket @ VM1429:1047
//RemoteFunctions @ VM1429:1062
//(anonymous) @ VM1429:1078
//(anonymous) @ task.js:72  - что это?


const title = document.querySelector('#poll__title');
const answers = document.querySelector('#poll__answers');

async function markUp() {
	const response = await request();


	title.textContent = response.data.title;
	for (let key in response.data.answers) {
		answers.insertAdjacentHTML('beforeend', ` <button class="poll__answer">
              ${response.data.answers[key]}
            </button>`);
	}
}

markUp();

async function request() {
	let response = await fetch('https://netology-slow-rest.herokuapp.com/poll.php');
	let obj = await response.json();

	return obj;
}




function getStatistics(event) {
	let statistic = '';
	let sumOfVotes = 0;
	fetch('https://netology-slow-rest.herokuapp.com/poll.php', {
			method: 'POST',
			headers: {
				'Content-type': 'application/x-www-form-urlencoded',
			},
			body: `vote=${title.dataset.id}&answer=${event.target.id}`,
		})
		.then((response) => response.json())
		.then((obj) => {

			console.log(obj.stat)
			obj.stat.forEach(elem => {//этот код  меняет заголовок, но считает неправильно и везде вставляет животных
				sumOfVotes += elem.votes;
				console.log(sumOfVotes);
				statistic += `
						<div class ="poll__answer">
						${elem.answer}:<strong>${(elem.votes * 100/sumOfVotes)// ошибка здесь, но я ее не вижу
						.toFixed(2)}%</strong>
						</div>`;

				
				
			});
		answers.innerHTML = statistic;
		})
		.catch((err) => console.log(err));
}



document.addEventListener('click', (event) => {
	if (!event.target.classList.contains('poll__answer')) {
		return;
	}
	getStatistics(event);
	alert('спасибо, Ваш голос засчитан!');
});



