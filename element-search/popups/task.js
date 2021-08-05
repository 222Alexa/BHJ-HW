  'use strict'

  const firstModal = document.getElementById('modal_main');
  firstModal.classList.toggle('modal_active');
  const secondModal = document.getElementById('modal_success');
  const closeModal = Array.from(document.getElementsByClassName('modal__close'));
  const successBtn = Array.from(document.getElementsByClassName('show-success'));

  closeModal.forEach(element => element.onclick = close);
  successBtn.forEach(element => element.onclick = changeModal);

  function changeModal() {
  	secondModal.classList.toggle('modal_active');
  	firstModal.classList.toggle('modal_active');
  }

  function close() {
  	this.closest('.modal_active').classList.toggle('modal_active');
  }
