// const Cachorro = require('./Z/mod2');

// const salsiha = new Cachorro('Salsicha');
// salsiha.latir();


// console.log(__filename); // exibi o caminho completo e o nome do arquivo
// console.log(__dirname); // exibe o caminho completo do sistema até chegar no arquivo

const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'aquivos', 'imagens'));