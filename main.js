const bars = document.querySelector('.header_bars');
const menu = document.querySelector('.header_menu');
const login = document.querySelector('.header_login');
const toggleBtn = document.querySelector('#toggle')

bars.addEventListener('click', function(){
   menu.classList.toggle('active');
   login.classList.toggle('active');
});