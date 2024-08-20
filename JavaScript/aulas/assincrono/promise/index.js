function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') reject(new Error('BAD VALUE'));
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com BD', rand(1, 3)).then(msg => {
    console.log(msg);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
}).then(msg => {
    console.log(msg);
    return esperaAi(22, rand(1, 3));
}).then(msg => {
    console.log(msg);
}).then(() => {
    console.log('Exibe dados na tela');
})
    .catch(e => {
        console.log(e);
    });
