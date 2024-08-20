/*
Primitivos (imutáveis) - string, number, boolean, undefined,
null (bigint, symbol) - Valores copiados

Referências (mutáveis) - array, object, function - Passado por referência
*/

// let a = [1, 2, 3]
// let b = a // -> apenas referência os valores de a (não copia)
// let b = [...a] // -> copia os valores de a para b, sem fazer referência

// console.log(a, b)

// a.push(4)
// console.log(a, b)

// b.pop()
// console.log(a, b)

const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio'
}

// mesma coisa vale para os objetos
const b = { ...a }

a.nome = 'João'
console.log(a, b)