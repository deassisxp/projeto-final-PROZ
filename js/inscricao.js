let secLogin = document.querySelector('a.btn-login');
let secRegistro = document.querySelector('a.btn-register');
let mostrarLogin = document.querySelector('section.formulario-login');
let mostrarRegistro = document.querySelector('section.formulario-registro')

window.addEventListener('load', () =>{
    mostrarRegistro.classList.add('hide');
    mostrarRegistro.classList.remove('visible');
})

secRegistro.addEventListener('click', () => {
    mostrarLogin.classList.add('hide');
    mostrarLogin.classList.remove('visible')
    mostrarRegistro.classList.add('visible');
    mostrarRegistro.classList.remove('hide');
})

secLogin.addEventListener('click', () => {
    mostrarRegistro.classList.remove('visible');
    mostrarRegistro.classList.add('hide');
    mostrarLogin.classList.remove('hide')
    mostrarLogin.classList.add('visible');
})
