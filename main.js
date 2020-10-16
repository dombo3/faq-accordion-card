let questionBars = document.querySelectorAll('.topdown-toggle');

for (let i = 0; i < questionBars.length; i++) {
  questionBars[i].addEventListener('click', hide);
}

function hide(e) {
  this.querySelector('.topdown-toggle p').classList.toggle('hidden');
  this.querySelector('.question-bar h4 span').classList.toggle('emphasized');
  this.querySelector('.question-bar img').classList.toggle('rotate');
  
  const parent = this.parentNode;
  const current = this;

  const siblings = [].slice.call(parent.children).filter(function(child) {
      return child !== current && child.tagName !== 'H1';
  });
  
  for (let i = 0; i < siblings.length; i++) {
    const elementIsHidden = siblings[i].querySelector('.topdown-toggle p').classList.contains('hidden');
    if (!elementIsHidden) {
      siblings[i].querySelector('.topdown-toggle p').classList.toggle('hidden');
      siblings[i].querySelector('.question-bar h4 span').classList.toggle('emphasized');
      siblings[i].querySelector('.question-bar img').classList.toggle('rotate');
    }
  }
}