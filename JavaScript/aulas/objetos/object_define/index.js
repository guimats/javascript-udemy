// defineProperty - defineProperties

function Produto(nome, preco, estoque) {
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave quando exibe o objeto (object.keys ou for in)
        value: estoque, // atrelando valor
        writable: true, // -> se permite ou não alterar o valor
        configurable: false, // -> permite reconfigurar a propriedade (apagar/editar configurações)
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave quando exibe o objeto (object.keys ou for in)
            value: nome, // atrelando valor
            writable: true, // -> se permite ou não alterar o valor
            configurable: true, // -> permite reconfigurar a propriedade (apagar/editar configurações)
        },
        preco: {
            enumerable: true, // mostra a chave quando exibe o objeto (object.keys ou for in)
            value: preco, // atrelando valor
            writable: true, // -> se permite ou não alterar o valor
            configurable: true, // -> permite reconfigurar a propriedade (apagar/editar configurações)
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));

for (let chave in p1) {
    console.log(chave);
}