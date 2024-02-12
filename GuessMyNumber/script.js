'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Heyy haha correct';
// document.querySelector('.number').textContent = 60;
// document.querySelector('.score').textContent = 96;
// document.querySelector('.guess').value = 420;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'Heyy Put a number ';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Wau that is correct';
    document.querySelector('body').style.backgroundColor =
      'rgba(62, 184, 113, 0.98)';
    document.querySelector('.number').textContent = secretNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        ' Low, try guessing High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'How Could you looseee? ';
      document.querySelector('.score').textContent = 0;
      ('rgba(183, 69, 45, 0.98)');
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'High , try guessing low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent =
        'How Could you looseee? ';
      document.querySelector('body').style.backgroundColor =
        'rgba(183, 69, 45, 0.98)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
});
