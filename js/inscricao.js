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

// Validação do formulário de inscrição
const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validaNome();
    validaEmail();
    validaSenha();
    validaComparacaoSenha();
})

function setError(index){
    campos[index].style.border = '2px solid #d63c3c';
    spans[index].style.display = 'block';
} 

function removeError(index){
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}

function validaNome(){
    if(campos[0].value.length < 3){
        setError(0)
    }else{
        removeError(0)
    }
}

function validaEmail(){
    if(emailRegex.test(campos[1].value)){
        removeError(1);
    }else{
        setError(1);
    }
}

function validaSenha(){
    if(campos[2].value.length < 8){
        setError(2);
    }else{
        removeError(2);
    }
}

function validaComparacaoSenha(){
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        removeError(3);
    }else{
        setError(3);
    }
}

