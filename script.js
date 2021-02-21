'use strict';

const ini = {
  secret: Math.trunc(Math.random() * 20) + 1,
  score: 20,
  highscore: 0,
};

// console.log(ini.secret);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const guessFunction = function () {
  const guessNumber = Number(document.querySelector('.guess').value);
  if (ini.score > 0 && guessNumber !== ini.secret) {
    if (guessNumber <= 0) {
      displayMessage('⛔INVALID NUMBER, try again!!!');
      document.querySelector('body').style.backgroundColor = 'blue';
    } else if (guessNumber !== ini.secret) {
      displayMessage(guessNumber > ini.secret ? 'too high' : 'too low');
      ini.score--;
      document.querySelector('.score').textContent = ini.score;
      document.querySelector('body').style.backgroundColor = '#222';
    }
  } else if (ini.score > 0 && guessNumber === ini.secret) {
    displayMessage('🎊 right guess...');
    document.querySelector('.number').textContent = ini.secret;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (ini.score > ini.highscore) {
      ini.highscore = ini.score;
      document.querySelector('.highscore').textContent = ini.highscore;
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
  ini.score = 20;
  ini.secret = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = ini.score;
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
