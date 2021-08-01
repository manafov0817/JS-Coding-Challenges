'use strict';

let score = 20;
let sercretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = 0;

function decreaseScore(wargningString) {
    if (score > 1) {
        document.querySelector('.message').textContent = wargningString;
        --score;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'You Lost';
        document.querySelector('.score').textContent = 0;
    }
}

document.querySelector('.check').addEventListener('click', function() {

    let returnNumber = Number(document.querySelector('.guess').value);

    if (returnNumber != 0 && returnNumber > 0) {
        if (returnNumber === sercretNumber) {
            document.querySelector('.message').textContent = 'You Won';
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').textContent = sercretNumber;
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }
        } else if (returnNumber > sercretNumber) {
            decreaseScore('Too High 🔺');
        } else if (returnNumber < sercretNumber) {
            decreaseScore('Too Low 🔻');
        }
    } else {
        document.querySelector('.message').textContent = '❌ Please Add Valid value';
    }
});


document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('.score').textContent = score;
    sercretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = 0;
    document.querySelector('.message').textContent = 'You Won';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.highscore').textContent = highScore;
});