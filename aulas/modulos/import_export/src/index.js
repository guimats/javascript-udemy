// import { idade, nome, sobrenome, soma } from './modulo1'
// import * as MeuModulo from './modulo1' // tudo dentro do modulo
import Pessoa, { nome, sobrenome } from './modulo1' // importa o default

const pessoa = new Pessoa(nome, sobrenome)

console.log(pessoa);

// const pessoa = new Pessoa('Luiz', 'Otavio');
// console.log(nome, sobrenome, idade, soma(5, 5), /* pessoa */);