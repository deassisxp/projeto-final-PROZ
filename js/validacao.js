document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        var campos = document.querySelectorAll('.campo-obrigatorio');
        var formValido = true;

        campos.forEach(function(campo) {
            if (!campo.value.trim()) {
                campo.style.borderColor = 'red';
                formValido = false;
            } else {
                campo.style.borderColor = '';
            }
        });

        if (!formValido) {
            event.preventDefault();
        }
    });
});
function validarEmail(email) {
    var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@a-zA-Z0-9?(?:\\.a-zA-Z0-9?)*$/;
    return regex.test(email);
}