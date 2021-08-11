'use strict';

const title = document.querySelector('#poll__title');

async function markUp() {
	const response = await request();
	
	const answers = document.querySelector('#poll__answers');
	title.textContent = response.data.title;
	for (let key in response.data.answers) {
		answers.insertAdjacentHTML('beforeend', ` <button class="poll__answer">
              ${response.data.answers[key]}
            </button>`);
	}
}


async function request() {
	let response = await fetch('https://netology-slow-rest.herokuapp.com/poll.php');
	let obj = await response.json();

	return obj;
}

document.getElementById('poll__answers').addEventListener('click', (event) => {
	if (event.target.classList.contains('poll__answer')) {
		alert('спасибо, Ваш голос засчитан!');
		
		const xhr = new XMLHttpRequest();
		xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(`vote=${title.dataset.id}&answer=${event.target.id}`);
		
		
		

	}

});


/*fetch('https://netology-slow-rest.herokuapp.com/poll.php ', {
    method: 'post',
    body: JSON.stringify(`vote=${title.dataset.id}&answer=${event.target.id}`),//что здесь должно быть? вернее как это должно выглядеть?
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
})
*/


markUp();

/*
// https://netology-slow-rest.herokuapp.com/poll.php

//vote=id_опроса&answer=индекс_ответа_в_массиве_ответов

/*const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');
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
answers.addEventListener('click', (event) => {
    if (event.target.classList.contains('poll__answer')) {
        alert('спасибо, Ваш голос засчитан!');
    }
});





*/
