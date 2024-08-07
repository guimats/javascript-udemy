// filter - > sempre vai retornar um array com a mesma quantidade de elementos ou menos
// filter -> recebe os parametros valor, indice e array
// a função do filter sempre retorna true ou false (true para retornar o valor e false para não retornar)

// retorne os números maiores que 10
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const numMaiorDez = numeros.filter(valor => valor > 10);

// console.log(numMaiorDez);

// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
];

const cincoLetras = pessoas.filter(value => value.nome.length >= 5);
const cinquentaAnos = pessoas.filter(value => value.idade > 50);
const ultimaLetraA = pessoas.filter(value => value.nome.toLowerCase().endsWith('a'));

console.log(cincoLetras);
console.log('-----------------')
console.log(cinquentaAnos);
console.log('-----------------')
console.log(ultimaLetraA);