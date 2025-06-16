var btn_menu = document.querySelector('#btn_menu');
var menu_hide = document.querySelector('aside');
var img_hide = document.querySelector('#image_short_profile')

btn_menu.addEventListener('click', function(){
    menu_hide.classList.toggle('show');
    img_hide.classList.toggle('show_img');
});