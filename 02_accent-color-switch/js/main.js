const root = document.documentElement;
const btn = document.querySelector('.color-change-btn');

btn.addEventListener('click', () =>{
  root.classList.toggle('theme-gold');
});