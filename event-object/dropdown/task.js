function clickValue(event) {
    event.target.nextElementSibling.classList.toggle('dropdown__list_active');
}

function clickLink(event) {
    if (event.target.closest('.dropdown__list').previousElementSibling.classList.contains('dropdown__value')) {
        event.target.closest('.dropdown__list').previousElementSibling.textContent = event.target.textContent;
    }
    event.target.closest('.dropdown__list').classList.toggle('dropdown__list_active');
}

Array.from(document.getElementsByClassName('dropdown__value')).forEach(el => el.addEventListener('click', (event) => clickValue(event)));

Array.from(document.getElementsByClassName('dropdown__list')).forEach(el => el.addEventListener('click', (event) => {
    event.preventDefault();
    clickLink(event);
}));