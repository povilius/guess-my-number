'use strict';

// document.querySelector('.message').textContent = 'Correct number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 15;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No, number! ⛔';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number! 🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔺 Too High! 🔺';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🥲 You lost the game! 🥲';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🔻 Too Low! 🔻';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '🥲 You lost the game! 🥲';
      document.querySelector('.score').textContent = 0;
    }
  }
});
