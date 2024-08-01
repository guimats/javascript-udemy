// Factory funcrion (função fábrica)
// this semelhante ao self (python)
function criaPessoa(nome, sobrenome, alt, pes) {
    return {
        nome,
        sobrenome,

        // Getter
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },

        // Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },

        fala(assunto) {
            return `${this.nome} está ${assunto}`
        },
        altura: alt,
        peso: pes,

        // Getter
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
console.log(p1.nomeCompleto)
console.log(p1.nome)
p1.nomeCompleto = 'Maria Oliveira Silva'
console.log(p1.nomeCompleto)
console.log(p1.nome)


// const p2 = criaPessoa('Maria', 'Joaquina', 1.62, 42);

// console.log(p1.fala('falando sobre JS'));
// console.log(p2.fala('falando sobre JS'));

// console.log(p1.imc);
// console.log(p2.imc);