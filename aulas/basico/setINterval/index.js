function mostraHora() {
    const date = new Date()

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function () {
    console.log(mostraHora());
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 7000);

setTimeout(function () {
    console.log('Olá, mundo!');
}, 5000);

