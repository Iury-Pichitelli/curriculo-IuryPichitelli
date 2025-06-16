var btn_menu = document.querySelector('#btn_menu');
var menu_hide = document.querySelector('aside');

btn_menu.addEventListener('click', function(){
    menu_hide.classList.toggle('show');
});