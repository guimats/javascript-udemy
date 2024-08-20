/* 
O callback serve para que tarefas que tenham tempos diferentes 
de execussão sejam executadas na ordem desejada (OCORRE MUITO NO DEV WEB) 
*/


function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}

// setTimeout para simular um serviço web que pode demorar um tempo para dar resposta
function f1(callback) {
    setTimeout(function () {
        console.log('f1');
        if (callback) callback()
    }, rand());
}
function f2(callback) {
    setTimeout(function () {
        console.log('f2');
        if (callback) callback()
    }, rand());
}
function f3(callback) {
    setTimeout(function () {
        console.log('f3');
        if (callback) callback()
    }, rand());
}

f1(f1Callback);

function f1Callback() {
    f2(f2Callback());
}

function f2Callback() {
    f3(f3Callback());
}

function f3Callback() {
    f3(console.log('Olá mundo!'));
}