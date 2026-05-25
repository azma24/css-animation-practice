const openBtn = document.querySelector('.js-open');
const content = document.querySelector('.modal');
const closeBtns = document.querySelectorAll('.js-close');

openBtn.addEventListener('click', () => {
  content.classList.add('is-open');
});

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    content.classList.remove('is-open');
  });
});
