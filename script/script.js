var btn_menu = document.querySelector('#btn_menu');
var menu_hide = document.querySelector('aside');

btn_menu.addEventListener('click', function(){
    if(menu_hide.style.display === 'none'){
        menu_hide.style.display = 'block';
    } else{
        menu_hide.style.display = 'block';
    }
});