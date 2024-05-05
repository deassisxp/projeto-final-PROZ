var nav = document.querySelector('nav');
console.log(nav)

window.addEventListener('scroll', function(){
    var scrollPosition = window.scrollY;
    if(scrollPosition > 50){
        nav.classList.add('nav-scroll-bg');
    }else{
        nav.classList.remove('nav-scroll-bg')
    }
})