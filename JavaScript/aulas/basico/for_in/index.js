// For in -> lê os indices ou chaves do objeto

// Com ARRAY:
// const frutas = ['Pera', 'Maça', 'Uva'];

// for (let i in frutas) {
//     console.log(frutas[i])
// };

// Com OBJETOS:
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
};

for (let key in pessoa) {
    console.log(key, pessoa[key])
}
