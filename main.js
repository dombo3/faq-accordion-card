let images = document.querySelectorAll('img');

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener('click', hide);
}

function hide(e) {
 e.target.parentNode.parentNode.querySelector('.topdown-toggle p').classList.toggle('hidden');
}