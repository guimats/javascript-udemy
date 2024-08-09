

function validarCpf(cpf) {

    if (cpf.length != 9 || cpf.lenth != 11) {
        alert('CPF INVÁLIDO!');
        focar();
        return
    }

    alert(cpf);
}

function focar() {
    const cpfinput = document.querySelector('#cpftext');
    cpfinput.value = '';
    cpfinput.focus();
}


document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const cpftext = document.querySelector('#cpftext').value;

    if (el.classList.contains('btn-validar')) {
        validarCpf(cpftext);
    }
});