'use strict';

const tooltips = Array.from(document.querySelectorAll('.has-tooltip'));// 1 Получить элементы, требующие подсказки.

tooltips.forEach(element => {
    element.insertAdjacentHTML('afterEnd', `<div class = 'tooltip' style = ''> ${element.getAttribute('title')} </div>`);//2 создать элемент с заданным классом и добавить ему текст подсказки или взять текст из полученных ранее элементов.
    
    element.addEventListener('click', (e) => {//3 повесить обработчик события, который будет вставлять в ДОМ созданный элемент
        e.preventDefault();
        let tooltip = element.nextSibling;
        let positionTooltip = element.getBoundingClientRect();
        tooltip.style.left = positionTooltip.left + 'px';
        tooltip.style.top = positionTooltip.bottom + 'px';
        tooltip.classList.toggle('tooltip_active');
    });
});