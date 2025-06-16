var btn_menu = document.querySelector('#btn_menu');

var menu_hide = document.querySelector('aside');
var img_hide = document.querySelector('#image_short_profile')
var bloco_1 = document.querySelector('.bloco_1');
var bloco_2 = document.querySelector('.bloco_2');
var bloco_3 = document.querySelector('.bloco_3');

btn_menu.addEventListener('click', function(){
    menu_hide.classList.toggle('show');
    img_hide.classList.toggle('show_elements_aside');
    bloco_1.classList.toggle('show_elements_aside');
    bloco_2.classList.toggle('show_elements_aside');
    bloco_3.classList.toggle('show_elements_aside');
});