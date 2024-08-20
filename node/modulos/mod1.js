class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
}

const nome = 'Marcos';
const sobrenome = 'Pollo';

// module.exports.Pessoa = Pessoa;
exports.Pessoa = Pessoa;

module.exports = {
    nome, sobrenome, Pessoa
};