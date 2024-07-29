// Capturando envento de submit do formulário
const form = document.querySelector('#form')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    console.log('Evento previnido')
    setResultado('Olá mundo')
})

function setResultado(msg) {
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''

    const p = document.createElement('p')
    p.innerHTML = msg
    resultado.appendChild(p)
}