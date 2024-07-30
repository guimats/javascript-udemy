let sec = 0;
let min = 0;
let hour = 0;
let isPaused = false;
let isOn = false;

const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
const timer_text = document.querySelector('.timer');

function timer() {
    setInterval(function () {
        if (!isPaused) {
            isOn = true
            sec++;
            if (sec === 20) {
                sec = 0;
                min++;
            }
            if (min === 60) {
                min = 0;
                hour++;
            }

            timer_text.innerHTML = `${zeroEsquerda(hour)}:${zeroEsquerda(min)}:${zeroEsquerda(sec)}`;
        }
    }, 1000);
}

function zeroEsquerda(num) {
    if (num.toString().length < 2) {
        return `0${num}`;
    }
    return num;
}

iniciar.addEventListener('click', function (e) {
    e.preventDefault();
    if (isPaused) {
        isPaused = false;
        timer_text.classList.remove('paused-timer-color');
        return;
    }
    if (!isOn) timer();

});

pausar.addEventListener('click', function (e) {
    e.preventDefault();
    isPaused = true;
    timer_text.classList.add('paused-timer-color');

});

zerar.addEventListener('click', function (e) {
    e.preventDefault();
    sec = 0;
    min = 0;
    hour = 0;
    isPaused = true;
    timer_text.innerHTML = `${zeroEsquerda(hour)}:${zeroEsquerda(min)}:${zeroEsquerda(sec)}`;
    timer_text.classList.remove('paused-timer-color');
});