const questions = document.querySelectorAll('.accordion');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.closest('.faq');
    const answer = item.querySelector('.accordion-body');
    answer.classList.toggle('is-open');

    question.classList.toggle('is-active');
  });
});