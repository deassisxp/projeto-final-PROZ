var buttonMenu = document.querySelector('.menu-mobile');
var menu = document.querySelector('.items-nav');

buttonMenu.addEventListener('click', () => {
    if(menu.classList.contains('active')){
        menu.classList.remove('active');
    }else{
        menu.classList.add('active');
        nav.classList.add('nav-scroll-bg');
    }
})


var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY;
    if(scrollPosition > 50){
        nav.classList.add('nav-scroll-bg');
    }else{
        nav.classList.remove('nav-scroll-bg')
    }
})

