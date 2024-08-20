const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(indice, delete, elemento1, elemento2, elemento3...)
// Number.MAX_VALUE -> valor máximo que pode existir no JS

//pop
// const removidos = nomes.splice(-1, 1);

//shift
// const removidos = nomes.splice(0, 1);
// console.log(nomes, removidos);

//push
// nomes.splice(nomes.length, 0, 'Luiz', 'Otávio');
// console.log(nomes)

//unshift
nomes.splice(0, 0, 'Luiz', 'Otávio');
console.log(nomes)