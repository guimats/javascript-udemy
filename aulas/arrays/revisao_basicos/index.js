// Valor por referência
// Strings, objetos, funções, números
// const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];

// Criando uma cópia de array
// const novo = [...nomes];

// -----> Removendo elementos do array
// console.log(nomes.length);
// const removido_fim = nomes.pop(); // pop remove do final
// const removido_inicio = nomes.shift(); // shift remove do inicio
// console.log(nomes, removido_fim, removido_inicio);

// -----> Adicionando elementos no array
// nomes.unshift('João'); // Adiciona no inicio do array
// nomes.push('Wallace'); // Adiciona no fim do array
// console.log(nomes);

// ----> Fatiando um array
// const novo = nomes.slice(1, -2);
// console.log(novo);

// ----> Separando string e adicionando a uma array
// const nome = 'Luiz Otavio Miranda';
// const nomes = nome.split(' ');
// console.log(nomes);

// ----> Juntando array em uma string
const nomes = ['Luiz', 'Otávio', 'Miranda'];
const nome = nomes.join(' ');
console.log(nome);