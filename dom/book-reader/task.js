'use strict';
const fontSize = Array.from(document.querySelectorAll('.book__control_font-size .font-size'));
const textColor = Array.from(document.querySelectorAll('.book__control_color .color'));
const backgroundColor = Array.from(document.querySelectorAll('.book__control_background .color'));
const book = document.querySelector('.book');

// универсальная функция, которая будет перебирать коллекции элементов, находить нужные и удалять у них выбранный класс.

function changeClass(elements, el, ClassName) {
    elements.forEach((event) => event.classList.remove(ClassName));
    el.classList.add(ClassName);
}

fontSize.forEach((e) => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        changeClass(fontSize, e.target, 'font-size_active');
        changeFontSize(e.target);
    });
});

function changeFontSize(el) {
    let fSize = el.dataset.size;
    if (fSize == 'small') {
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
    }
    else if (fSize == 'big') {
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
    }
    else {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }
}
textColor.forEach((e) => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        changeClass(textColor, e.target, 'color_active');
        changeTextColor(e.target);
    });
});

function changeTextColor(el) {
    let tColor = el.dataset.textColor;
    if (tColor == 'gray') {
        book.classList.remove('book_color-whitesmoke');
        book.classList.remove('book_color-black');
        book.classList.add('book_color-gray');
    }
    else if (tColor == 'black') {
        book.classList.remove('book_color-whitesmoke');
        book.classList.remove('book_color-gray');
        book.classList.add('book_color-black');
    }
    else if (tColor == 'whitesmoke') {
        book.classList.remove('book_color-black');
        book.classList.remove('book_color-gray');
        book.classList.add('book_color-whitesmoke');
    }
}
backgroundColor.forEach((e) => {
    e.addEventListener('click', (e) => {
        e.preventDefault();
        changeClass(backgroundColor, e.target, 'color_active');
        changeBackGroundColor(e.target);
    });
});

function changeBackGroundColor(el) {
    let bgColor = el.dataset.bgColor;
    if (bgColor == 'gray') {
        book.classList.remove('bg_color_white');
        book.classList.remove('bg_color_black');
        book.classList.add('bg_color_gray');
    }
    else if (bgColor == 'black') {
        book.classList.remove('bg_color_white');
        book.classList.remove('bg_color_gray');
        book.classList.add('bg_color_black');
    }
    else if (bgColor == 'white') {
        book.classList.remove('bg_color_black');
        book.classList.remove('bg_color_gray');
        book.classList.add('bg_color_white');
    }
}