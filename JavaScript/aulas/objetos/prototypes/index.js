// Construtora -> molde (classes)
// function Pessoa(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
// this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome
// }

// Pessoa.prototype.nomeCompleto = function () { return this.nome + ' ' + this.sobrenome }

//instância
// const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = função construtora
// const pessoa2 = new Pessoa('Maria', 'A.'); // <- Pessoa = função construtora
// const data = new Date(); // <- Date = função construtora

// console.dir(pessoa1);
// console.dir(pessoa2);
// console.dir(data);

// console.log(pessoa1.nomeCompleto());

// **** MANIPULANDO PROTOTYPE  ****

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
    return this.preco -= ((this.preco * percentual) / 100)
};

Produto.prototype.aumento = function (percentual) {
    return this.preco += ((this.preco * percentual) / 100)
};

const camisa = new Produto('Camisa', 50);
// camisa.aumento(10);
// console.log(camisa);

// Objeto literal
const caneca = {
    nome: 'Caneca',
    preco: 15,
};

Object.setPrototypeOf(caneca, Produto.prototype);

caneca.aumento(10);
// console.log(caneca);

// Adicionando proto do constructor ao objeto
const p3 = Object.create(Produto.prototype, { //opcional
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99,
    },
    tamanho2: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 42,
    },
});
p3.aumento(10);
console.log(p3);