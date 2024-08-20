export default class GerarSenha {

    isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    gerarLetraOuNumero(numero = false, upper = false) {

        if (numero) {
            const numero = String(Math.floor(Math.random() * (9 - 0) + 0));
            return numero;
        }

        let novaLetra;

        do {
            novaLetra = Math.random().toString(36).substring(2, 3);
            if (!this.isNumeric(novaLetra)) break;
        } while (true);

        const letra = upper ? novaLetra.toUpperCase() : novaLetra;

        return letra;
    }

    gerarEspecial() {

        const chars = '?/~^{}[]!@#$%&*()_-+=.,:;'
        const char = chars[Math.floor(Math.random() * chars.length)];

        return char;
    }

    criarSenha(tamanho) {
        const number = document.querySelector('#checkbox-number').checked;
        const upper = document.querySelector('#checkbox-letter-upper').checked;
        const lower = document.querySelector('#checkbox-letter-lower').checked;
        const special = document.querySelector('#checkbox-special').checked;

        let passsword = '';
        for (let i = 0; passsword.length < tamanho; i++) {
            if (upper) passsword += this.gerarLetraOuNumero(false, true);
            if (lower) passsword += this.gerarLetraOuNumero();
            if (number) passsword += this.gerarLetraOuNumero(true);
            if (special) passsword += this.gerarEspecial();
            if (passsword.length === 0) {
                alert('Selecione algum tipo de caractere para gerar uma senha!');
                break;
            }
        }
        return passsword;
    }
}