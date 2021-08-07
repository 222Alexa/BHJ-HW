'use strict';

const chatWidget = document.querySelector('.chat-widget');
const chatWidgetInput = document.querySelector('.chat-widget__input');
let messages = document.querySelector('.chat-widget__messages');


chatWidget.addEventListener('click', () => {
	{
		chatWidget.classList.add('chat-widget_active');

	}
});

function randomBotMessages() {
	const botMessages = ['Поправляйтесь', 'Некогда нам тут ерундой заниматься', 'Самовыражайтесь яснее, юноша!', 'кофе принес?', 'Деньги покажите?!', 'Кто здесь?', 'Вы уже перестали пить коньяк по утрам?'];
	let indexMessage = Math.floor(Math.random() * botMessages.length);
	return botMessages[indexMessage];
}

function getTime() {
	let currentDate = new Date().getHours() + ':' + new Date().getMinutes();
	return (currentDate);
}
chatWidget.addEventListener('keydown', (e) => {
	let clientMessages = chatWidgetInput.value.trim();
	if (e.key === 'Enter' && (clientMessages !== '')) {

		messages.innerHTML += `
                       // Сообщение от клиента
                        <div class="message message_client">
                            <div class="message__time">${getTime()}</div>
                            <div class="message__text">${clientMessages}</div>
                        </div>
                        //Сообщение от робота
                        <div class="message">
                            <div class="message__time"> ${getTime()}</div>
                            <div class="message__text">${randomBotMessages()}</div>
                        </div>`;
		chatWidgetInput.value = '';
		scrollDown();
		clearInterval(autoPlay);

	}

});


function scrollDown() {
	const messagesContainer = document.querySelector(".chat-widget__messages-container");
	messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function refreshmentMessageBot() {
	const refreshmentMessage = ['Вы закончили? окно закройте!', 'На бумажке напишите!', 'Алё?!'];
	let indexMessage = Math.floor(Math.random() * refreshmentMessage.length);
	return refreshmentMessage[indexMessage];

}


function auto_play() {
	//Сообщение от робота в случае простоя
	messages.innerHTML += `

                        //Сообщение от робота
                        <div class="message">
                            <div class="message__time"> ${getTime()}</div>
                            <div class="message__text">${refreshmentMessageBot()}</div>
                        </div>`;
	chatWidgetInput.value = '';
	scrollDown();
}

let autoPlay = setInterval(auto_play, 30000);
