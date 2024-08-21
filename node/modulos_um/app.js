const path = require('path'); // importação de módulo padrão do node ou instalado não precisa do caminho
const axios = require('axios');
const { Pessoa } = require('./mod1');  // importação de módulo criada precisa do caminho

const p1 = new Pessoa('Luiz');
console.log(p1);

// axios('https://github.com/Maujor/json/blob/master/db.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));    