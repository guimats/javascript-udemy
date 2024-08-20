// Decalaração de função (Function hoinsting)
falaOi();

function falaOi() {
    console.log('Oi');
};

// First-class objects (Objetos de primeira classe)
// Function exoression
const souUmDado = function () {
    console.log('Sou um dado.');
};
souUmDado();

// Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando...');
    }
};
obj.falar();