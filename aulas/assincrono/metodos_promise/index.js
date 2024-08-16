function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject(new Error('BAD VALUE'));
            return;
        }
        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
            return;
        }, tempo);
    });
}

// Promise.all Promice.race Promise.resolve Promise.reject
const promises = [
    esperaAi('Promisse 1', 3000),
    esperaAi('Promisse 2', 500),
    esperaAi('Promisse 3', 1000),
    // esperaAi(100, 1000),
];

function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
        // return Promise.reject('Página em cache');
    } else {
        return esperaAi('Baixei a página', 2000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log(e));


// retorna todas as promises (ex, de um array) já resolvidas
// Promise.all(promises).then(valor => {
//     console.log(valor);
// })
//     .catch(error => {
//         console.log(error);
//     });

// Promise.race(promises).then(valor => {
//     console.log(valor);
// })
//     .catch(error => {
//         console.log(error);
//     });