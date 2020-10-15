let questionBars = document.querySelectorAll('.topdown-toggle');

for (let i = 0; i < questionBars.length; i++) {
  questionBars[i].addEventListener('click', hide);
}

function hide(e) {
  this.querySelector('.topdown-toggle p').classList.toggle('hidden');
  this.querySelector('.question-bar h4 span').classList.toggle('emphasized');
  this.querySelector('.question-bar img').classList.toggle('rotate');
}