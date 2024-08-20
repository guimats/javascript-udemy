function relogio() {


    function criarHora(segundos) {
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.timer');
    let segundos = 0;
    let timer;

    function inciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = criarHora(segundos);
        }, 1000);
    }

    document.addEventListener('click', function (e) {
        const elemento = e.target;

        if (elemento.classList.contains('iniciar')) {
            relogio.classList.remove('paused-timer-color');
            clearInterval(timer);
            inciaRelogio();
        }
        if (elemento.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('paused-timer-color');
        }
        if (elemento.classList.contains('zerar')) {
            relogio.classList.remove('paused-timer-color');
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            segundos = 0;
        }
    });
}

relogio();