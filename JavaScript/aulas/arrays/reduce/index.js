// reduce recebe ACUMULADOR, valor, indice e array original (pode receber tbm um valor do acumulador)

// Some todos os números (reduce)
// Retorne um array com os pares (filter)
// Retorne um array com o dobro dos valores (map)
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// const total = numeros.reduce((total, value) => total += value);

// console.log(total);



// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 78 },
    { nome: 'Wallace', idade: 47 },
];

const maisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
})

// console.log(maisVelha)


// Filter + map + reduce

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter(
    valor => valor % 2 == 0
).map(
    valor => valor * 2
).reduce((acumulador, valor) => acumulador += valor);

console.log(numerosPares)
