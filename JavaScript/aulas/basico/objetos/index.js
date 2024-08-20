// function fractory -> função que cria objetos
// function criaPessoa(nome, sobrenome, idade) {
//     return { nome, sobrenome, idade }
// }

// const pessoa1 = criaPessoa('Luiz', 'Otavio', 25)
// const pessoa2 = criaPessoa('Maria', 'Miranda', 52)
// const pessoa3 = criaPessoa('João', 'Oliveira', 21)

// console.log(pessoa1.nome)
// console.log(pessoa2.nome)
// console.log(pessoa3.nome)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 35,


    fala() {
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
