export const nome = 'Luiz';
export const sobrenome = 'Amalri';
export const idade = 30;
const cpf = '123';

export function soma(x, y) {
    return x + y;
}

export default class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }

// export { nome, sobrenome, idade, soma };

// export { nome as default, sobrenome, idade, soma }