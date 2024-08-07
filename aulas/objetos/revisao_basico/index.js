
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

const pessoa1 = new Object();

pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Otávio';
pessoa1.idade = 30;
pessoa1.falarNome = function () {
    return `${this.nome} está falando seu nome`
};

pessoa1.getDataNascimento = function () {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade
}


console.log(pessoa1.falarNome());
console.log(pessoa1.getDataNascimento());