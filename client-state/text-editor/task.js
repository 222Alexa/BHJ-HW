'use strict';

const editor = document.getElementById('editor');
const clearBtn = document.getElementById('clear__btn');

editor.addEventListener('input', () => {
    localStorage.setItem('value', editor.value);
});

window.addEventListener('load', () => {
    editor.value = localStorage.getItem('value');
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('value');
    editor.value = '';
});