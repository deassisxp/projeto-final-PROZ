document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        var campos = document.querySelectorAll('.campo-obrigatorio');
        var formValido = true;

        campos.forEach(function(campo) {
            if (!campo.value.trim()) {
                campo.style.borderColor = 'red';
                formValido = false;
                if (!formValido) {
                    event.preventDefault();
                }
            } else {
                campo.style.borderColor = '';
            }
        });

        var email = document.getElementById('email');
        if (!validarEmail(email.value)) {
            email.style.borderColor = 'red';
            formValido = false;
        } else {
            email.style.borderColor = '';
        }

        var senha = document.getElementById('senha');
        var confirmarSenha = document.getElementById('confirmarSenha');
        if (senha.value !== confirmarSenha.value) {
            senha.style.borderColor = 'red';
            confirmarSenha.style.borderColor = 'red';
            formValido = false;
            if (!formValido) {
                event.preventDefault();
            }
        } else {
            senha.style.borderColor = '';
            confirmarSenha.style.borderColor = '';
        }

    });
});

function validarEmail(email) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@a-zA-Z0-9?(?:\\.a-zA-Z0-9?)*$/;
    return regex.test(email);
}
