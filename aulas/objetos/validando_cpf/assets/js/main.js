function validarCpf(cpfCompleto) {

    const cpf = removerPontuacaoCpf(cpfCompleto);
    focar();

    if (cpf.length != 11 || cpf === undefined) {
        alert('DIGITE O CPF CORRETAMENTE!');
        return;
    }

    let arrayCpf = cpf.split('');

    let valorCpf = 0;
    let c = 1;
    for (i in arrayCpf) {
        if (i == 0) {
            valorCpf = arrayCpf[i];
            continue;
        }

        if (arrayCpf[i] === valorCpf) c++;
    }

    if (c == 11) {
        alert('DIGITE O CPF CORRETAMENTE!');
        return;
    }

    cpfCorreto = calculoCpf(cpf);

    cpfValido = cpf === cpfCorreto;
    imprimirResultado(cpfValido);
}

function focar() {
    const cpfinput = document.querySelector('#cpftext');
    cpfinput.value = '';
    cpfinput.focus();
}

function removerPontuacaoCpf(cpfCompleto) {
    if (cpfCompleto.length > 14) {
        return;
    }

    const cpf = cpfCompleto.replace(/\D*/g, '');
    return cpf;
}

function calculoCpf(cpf) {
    const inicioCpf = cpf.slice(0, 9);
    let arrayCpf = inicioCpf.split('');

    let digitoUm = calculoDigitoUm(arrayCpf);
    arrayCpf.push(digitoUm);

    let digitoDois = calculoDigitoDois(arrayCpf);
    arrayCpf.push(digitoDois);

    arrayCpf = arrayCpf.join('');

    return arrayCpf;
}

function calculoDigitoUm(arrayCpf) {
    let i = 10;
    let soma = 0;

    for (let digito of arrayCpf) {
        soma += (Number(digito) * i);
        i--;
    }
    let digitoUm = (11 - (soma % 11)) < 10 ? 11 - (soma % 11) : 0;

    return digitoUm;
}

function calculoDigitoDois(arrayCpf) {
    let i = 11;
    let soma = 0;

    for (let digito of arrayCpf) {
        soma += (Number(digito) * i);
        i--;
    }

    let digitoDois = (11 - (soma % 11)) < 10 ? 11 - (soma % 11) : 0;

    return digitoDois;
}

function imprimirResultado(cpf) {
    const textResultado = document.querySelector('.resultado');
    textResultado.classList.remove('cpf-invalido');
    textResultado.classList.remove('cpf-valido');

    if (cpf) {
        textResultado.innerHTML = 'O CPF informado é VÁLIDO';
        textResultado.classList.add('cpf-valido');
        return;
    }
    textResultado.innerHTML = 'O CPF informado é INVÁLIDO';
    textResultado.classList.add('cpf-invalido');
}


document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const cpftext = document.querySelector('#cpftext').value;

    if (el.classList.contains('btn-validar')) {
        validarCpf(cpftext);
    }
});