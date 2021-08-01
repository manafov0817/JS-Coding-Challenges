'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


const addModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const removeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', addModal)
}
overlay.addEventListener('click', removeModal);
btnCloseModal.addEventListener('click', removeModal);

document.addEventListener('keydown', function(e) {
    if (e.key.toLowerCase() === 'escape') {

        removeModal();
    }
})