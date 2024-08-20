class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado`)
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado`)
            return;
        }
        this.ligado = false;
    }
}

// utiliza ao extends para herdar de uma classe
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        // utilizando o super() para enviar os parametros da classe pai
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico {
    constructor(nome, temWifi) {
        super(nome);
        this.temWifi = temWifi
    }

    ligar() {
        console.log('Você alterou o modo ligar');
    }
}

const s1 = new Smartphone('iPhone', 'Preto', 'XR');
// s1.ligar();
// console.log(s1);

const t1 = new Tablet('iPad', true);
console.log(t1.ligado);
t1.ligar();