// IMPORTANTE: Em funções decladas com a palavra functions, os valores enviados na chamada da função são todos colocados no objeto 'arguments'
// function funcao() {
//     let total = 0;
//     for (let argumento of arguments) {
//         total += argumento;
//     }
//     console.log(total);
// }

// funcao(1, 2, 3, 4, 5, 6);


const conta = (...args) => {
    console.log(args)
};

conta('/', 1, 20, 30, 40, 50);