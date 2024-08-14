class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    // Método de instância -> referênte a instância
    aumentarVolume() {
        this.volume += 2;
    }

    // Método de instância -> referênte a instância
    diminuirVolume() {
        this.volume -= 2;
    }

    // Método estático -> referente a classe
    static somaValores(x, y) {
        return x + y;
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

console.log(ControleRemoto.somaValores(2, 4));
