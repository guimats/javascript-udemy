
// Construtores
// const pessoa1 = new Object();

// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';

// AMBAS AS FORMAS PODEM SER UTILIZADOS PARA CRIAR UM OBJETO

// const pessoa2 = {
//     nome: 'Luiz',
//     sobrenome: 'Otávio',
// };

// delete pessoa1.nome; // APAGA O MÉTODO DO OBJETO
// console.log(pessoa1);

// const pessoa1 = new Object();

// pessoa1.nome = 'Luiz';
// pessoa1.sobrenome = 'Otávio';
// pessoa1.idade = 30;
// pessoa1.falarNome = function () {
//     return `${this.nome} está falando seu nome`
// };

// pessoa1.getDataNascimento = function () {
//     const dataAtual = new Date();
//     return dataAtual.getFullYear() - this.idade
// };


// for (chave in pessoa1) {
//     console.log(pessoa1[chave]);
// };

// Factory function / Classes
function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,

        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}

// const p1 = criaPessoa('Luiz', 'Otávio');
// console.log(p1.nomeCompleto)

// Constructor functions / Classes
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    // faz com que não seja possivel alterar nenhuma informação do objeto, e o que vem depois dele não executa
    Object.freeze(this);
}

const p1 = new Pessoa('Luiz', 'Miranda');
console.log(p1);