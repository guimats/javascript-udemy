// function criaCalculadora() {
//     return {
//         display: document.querySelector('.display'),

//         inicia() {
//             this.cliqueBotoes();
//             this.pressionaEnter();
//         },

//         clearDisplay() {
//             this.display.value = '';
//         },

//         deleteOne() {
//             this.display.value = this.display.value.slice(0, -1);
//         },

//         realizaConta() {
//             let conta = this.display.value;

//             try {
//                 conta = eval(conta);

//                 if (!conta && conta != 0) {
//                     alert('Conta inválida!');
//                     return;
//                 }

//                 this.display.value = String(conta)
//             } catch (e) {
//                 alert('Conta inválida!');
//                 return;
//             }
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         },

//         cliqueBotoes() {
//             document.addEventListener('click', (e) => {
//                 const el = e.target;

//                 if (el.classList.contains('btn-num')) {
//                     this.btnParaDisplay(el.innerText);
//                 }

//                 if (el.classList.contains('btn-clear')) {
//                     this.clearDisplay();
//                 }

//                 if (el.classList.contains('btn-del')) {
//                     this.deleteOne();
//                 }

//                 if (el.classList.contains('btn-eq')) {
//                     this.realizaConta();
//                 }/*.bind(this) -> em caso de utilizar função normal, para mudar o this*/
//             });
//         },

//         pressionaEnter() {
//             this.display.addEventListener('keyup', (e) => {
//                 if (e.keyCode === 13) {
//                     this.realizaConta();
//                 }
//             });
//         },

//     };
// }

function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.cliqueBotoes();
        this.pressionaEnter();
    };

    this.clearDisplay = () => {
        this.display.value = '';
        this.display.focus();
    };

    this.deleteOne = () => {
        this.display.value = this.display.value.slice(0, -1);
        this.display.focus();
    };

    this.realizaConta = () => {
        let conta = this.display.value;

        try {
            conta = eval(conta);

            if (!conta && conta != 0) {
                alert('Conta inválida!');
                this.clearDisplay();
                return;
            }

            this.display.value = String(conta)
        } catch (e) {
            alert('Conta inválida!');
            this.clearDisplay();
            return;
        }
    };

    this.btnParaDisplay = valor => {
        this.display.value += valor;
        this.display.focus();
    };

    this.cliqueBotoes = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if (el.classList.contains('btn-num')) {
                this.btnParaDisplay(el.innerText);
            }

            if (el.classList.contains('btn-clear')) {
                this.clearDisplay();
            }

            if (el.classList.contains('btn-del')) {
                this.deleteOne();
            }

            if (el.classList.contains('btn-eq')) {
                this.realizaConta();
            }/*.bind(this) -> em caso de utilizar função normal, para mudar o this*/
        });
    };

    this.pressionaEnter = () => {
        this.display.addEventListener('keyup', (e) => {
            if (e.keyCode === 13) {
                this.realizaConta();
            }
        });
    };
}


const calculadora = new Calculadora();
calculadora.inicia();