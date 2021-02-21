'use strict';

let secret = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const guessFunction = function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (score > 0 && guessNumber !== secret) {
    if (guessNumber <= 0) {
      displayMessage('⛔INVALID NUMBER, try again!!!');
      document.querySelector('body').style.backgroundColor = 'blue';
    } else if (guessNumber !== secret) {
      displayMessage(guessNumber > secret ? 'too high' : 'too low');
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#222';
    }
  } else if (score > 0 && guessNumber === secret) {
    displayMessage('🎊 right guess...');
    document.querySelector('.number').textContent = secret;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.check').disabled = true;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').textContent = 'You Won!😉';
  } else {
    displayMessage('GAME OVER!!!! TRY AGAIN😪');
    document.querySelector('body').style.backgroundColor = 'red';
    document.querySelector('.check').textContent = 'You Lose😌';
  }
};

const againFunction = function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.check').textContent = 'Check!';

  document.querySelector('.check').disabled = false;
  document.querySelector('.guess').disabled = false;
};

document.querySelector('.check').addEventListener('click', guessFunction);

document.querySelector('.again').addEventListener('click', againFunction);

document.querySelector('.guess').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    guessFunction();
  }
});
