// Escreva uma função que recebe 2 números e retorne o maior deles

function maiorNumero (x, y) {
    return x > y ? `${x} > ${y}` : `${y} > ${x}`;
};

// Utilizando arrow function (na arrow function pode omitir o return, pois é implicito e por ser uma linha, podemos remover as chaves)
const maxNumero2 = (x, y) => x > y ? `${x} > ${y}` : `${y} > ${x}`;

console.log(maxNumero2(4, 44))