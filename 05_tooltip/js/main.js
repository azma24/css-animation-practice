const btns = document.querySelectorAll('.tip-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    btns.forEach((other) => {
      if (other !== btn) {
        other.classList.remove('is-open');
      }
    });
    btn.classList.toggle('is-open');
  });
});
