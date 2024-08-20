export default class ValidaCPF {
    constructor(cpfCompleto) {
        this.cpfCompleto = cpfCompleto;
    }

    validarCpf() {

        const cpf = ValidaCPF.removerPontuacaoCpf(this.cpfCompleto);
        ValidaCPF.focar();

        if (cpf.length != 11 || cpf === undefined) {
            alert('DIGITE O CPF CORRETAMENTE!');
            return;
        }

        let arrayCpf = cpf.split('');

        let valorCpf = 0;
        let c = 1;
        for (let i in arrayCpf) {
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

        const cpfCorreto = ValidaCPF.calculoCpf(cpf);

        const cpfValido = cpf === cpfCorreto;
        ValidaCPF.imprimirResultado(cpfValido);
    }

    static focar() {
        const cpfinput = document.querySelector('#cpftext');
        cpfinput.value = '';
        cpfinput.focus();
    }

    static removerPontuacaoCpf(cpfCompleto) {
        if (cpfCompleto.length > 14) {
            return;
        }

        const cpf = cpfCompleto.replace(/\D*/g, '');
        return cpf;
    }

    static imprimirResultado(cpf) {
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

    static calculoCpf(cpf) {
        const inicioCpf = cpf.slice(0, 9);
        let arrayCpf = inicioCpf.split('');

        let digitoUm = ValidaCPF.calculoDigito(arrayCpf);
        arrayCpf.push(digitoUm);

        let digitoDois = ValidaCPF.calculoDigito(arrayCpf);
        arrayCpf.push(digitoDois);

        arrayCpf = arrayCpf.join('');

        return arrayCpf;
    }

    static calculoDigito(arrayCpf) {
        let i = arrayCpf.length + 1;
        let soma = 0;

        for (let digito of arrayCpf) {
            soma += (Number(digito) * i);
            i--;
        }
        let digito = (11 - (soma % 11)) < 10 ? 11 - (soma % 11) : 0;

        return digito;
    }
}