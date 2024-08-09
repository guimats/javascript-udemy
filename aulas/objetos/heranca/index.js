// Produto -> aumento, desconto
// Camiseta -> cor
// Caneca -> material

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function (quantia) {
    this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
    this.preco -= quantia;
};


function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco);
    this.cor = cor;
}
// Vinculando o contrutor camiseta com o construtor produto (herdando)
Camiseta.prototype = Object.create(Produto.prototype);
// Redeclarando o construtor de camiseta como Camiseta
Camiseta.prototype.constructor = Camiseta;
// Reescrevendo o metodo aumento de produto (somente para camiseta)
Camiseta.prototype.aumento = function (percentual) {
    this.preco += (this.preco * (percentual / 100));
};

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,

        get: function () { return estoque },

        set: function (valor) {
            if (typeof valor != 'number') return;
            estoque = valor;
        },
    })
}

// Vinculando o contrutor caneca com o construtor produto (herdando)
Caneca.prototype = Object.create(Produto.prototype);
// Redeclarando o construtor de caneca como Caneca
Caneca.prototype.constructor = Caneca;


const produto = new Produto('GM', 111);
const camiseta = new Camiseta('Regata', 50.99, 'Preta');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
caneca.estoque = 123;

console.log(caneca.estoque);
console.log(caneca);
console.log(camiseta);
console.log(produto);