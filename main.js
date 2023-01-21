const bars = document.querySelector('.header_bars');
const menu = document.querySelector('.header_menu');
const login = document.querySelector('.header_login');

bars.addEventListener('click', () => {
   menu.classList.toggle('active');
   login.classList.toggle('active');
});