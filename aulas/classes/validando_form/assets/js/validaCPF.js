class ValidaCPF {
    constructor(cpfCompleto) {
        this.cpfCompleto = cpfCompleto;
    }

    validarCpf() {

        const cpf = ValidaCPF.removerPontuacaoCpf(this.cpfCompleto);

        if (cpf === undefined || cpf.length != 11) {
            return false;
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
            return false;
        }

        const cpfCorreto = ValidaCPF.calculoCpf(cpf);

        return cpf === cpfCorreto;
    }

    static removerPontuacaoCpf(cpfCompleto) {
        if (cpfCompleto.length > 14) {
            return;
        }

        const cpf = cpfCompleto.replace(/\D*/g, '');
        return cpf;
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
        let digitoUm = (11 - (soma % 11)) < 10 ? 11 - (soma % 11) : 0;

        return digitoUm;
    }
}