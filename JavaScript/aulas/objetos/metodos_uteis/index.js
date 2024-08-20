
// cópia com spread operation
// const caneca = { ...produto, material: 'porcelana' };

// caneca.nome = 'Outro nome';
// caneca.preco = 2.5;
// console.log(produto);
// console.log(caneca); 

// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
//     value: 'Qualquer outra coisa',
// });

// retorna as propriedas (property) do atributo do objeto
// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Object.keys(objeto) -> retorna as chaves do objeto
// Object.values(objeto) -> retorna os valores das chaves do objeto
// Object.entries(objeto) - > retorna arrays com os nomes das chaves e seus valores
const produto = { nome: 'Produto', preco: 1.8, material: 'porcelana' };

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}