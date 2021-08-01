'use strict';

const firstPlayerScore = document.querySelector("#score--0");
const secondPlayerScore = document.querySelector("#score--1");

const firstPlayerName = document.querySelector('#name--0');
const secondPlayerName = document.querySelector('#name--1');


const diceEl = document.querySelector('.dice');

const playerLayer0 = document.querySelector('.player--0');
const playerLayer1 = document.querySelector('.player--1');
const holdButton = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');


let rollButton = document.querySelector('.btn--roll');

let scores, playing, currentScore, activePlayer;

const reset = function() {
    playing = true;

    currentScore = 0;
    activePlayer = 0;

    scores = [0, 0];

    firstPlayerScore.textContent = 0;
    secondPlayerScore.textContent = 0;
    firstPlayerName.textContent = 'Player 1'
    secondPlayerName.textContent = 'Player 2';


    playerLayer0.classList.remove('player--winner');
    playerLayer1.classList.remove('player--winner');
    playerLayer0.classList.add('player--active');
    playerLayer1.classList.remove('player--active');

}

reset();

const changePlayer = function() {
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
};

rollButton.addEventListener('click', function() {
    if (playing) {
        let number = Math.floor(Math.random() * 6 + 1);

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${number}.png`;

        if (number != 1) {
            currentScore += number;
            document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
        } else {
            changePlayer();
        }
    }
})

holdButton.addEventListener('click', function() {
    if (playing) {

        scores[activePlayer] += currentScore;

        if (scores[activePlayer] >= 20) {
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`#name--${activePlayer}`).textContent = 'WINNER';

            playing = false;
        }
        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
        changePlayer();
    }
})

const newGame = document.querySelector('.btn--new');

newGame.addEventListener('click', reset);