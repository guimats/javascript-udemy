// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insufuciente. Saldo atual: R$${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag./c ${this.agencia}/${this.conta} | Saldo R$${this.saldo.toFixed(2)}`)
};

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor) {
    if ((this.saldo + this.limite) < valor) {
        console.log(`Saldo insufuciente. Saldo atual: R$${this.saldo.toFixed(2)}`)
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cc1 = new ContaCorrente(11, 22, 0, 100);
cc1.depositar(10);
cc1.sacar(110);
cc1.sacar(1);

console.log();

const cp1 = new ContaPoupanca(12, 33, 0);
cp1.depositar(10);
cp1.sacar(110);
cp1.sacar(1);